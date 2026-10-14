import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { updateProfileSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get profile
  app.get("/api/profile", async (req, res) => {
    try {
      const profile = await storage.getProfile();
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      res.json(profile);
    } catch (error) {
      res.status(500).json({ message: "Failed to get profile" });
    }
  });

  // Update profile
  app.put("/api/profile", async (req, res) => {
    try {
      const validatedData = updateProfileSchema.parse(req.body);
      const updatedProfile = await storage.updateProfile(validatedData);
      
      if (!updatedProfile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      
      res.json(updatedProfile);
    } catch (error) {
      res.status(400).json({ message: "Invalid profile data" });
    }
  });

  // Get projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to get projects" });
    }
  });

  // Submit direct contact message & dispatch email notification
  app.post("/api/contact", async (req, res) => {
    try {
      const { insertContactMessageSchema } = await import("@shared/schema");
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // 1. Persist the message in storage
      const savedMessage = await storage.createMessage(validatedData);

      // 2. Dispatch real-time email notification to Khensani (danielntulo@gmail.com)
      let emailDispatched = false;
      let emailError: string | null = null;

      try {
        const emailResponse = await fetch("https://formsubmit.co/ajax/danielntulo@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: validatedData.name,
            email: validatedData.email,
            _replyto: validatedData.email,
            _subject: `[DevPulse Portfolio Inquiry] ${validatedData.subject || "Direct Message from " + validatedData.name}`,
            message: validatedData.message,
            submittedAt: new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" }),
            portfolioUrl: req.headers.origin || "https://khensanintulo.dev"
          })
        });

        if (emailResponse.ok) {
          emailDispatched = true;
        } else {
          const errText = await emailResponse.text();
          console.warn("[Contact Dispatch Warning]: FormSubmit response status:", emailResponse.status, errText);
        }
      } catch (dispatchErr: any) {
        console.error("[Contact Dispatch Error]:", dispatchErr?.message || dispatchErr);
        emailError = dispatchErr?.message || "Failed to contact email gateway";
      }

      res.status(201).json({
        success: true,
        message: "Message received successfully",
        data: savedMessage,
        emailDispatched,
        emailError
      });
    } catch (error: any) {
      console.error("[Contact Route Error]:", error);
      res.status(400).json({
        success: false,
        message: error?.errors?.[0]?.message || error?.message || "Failed to send message"
      });
    }
  });

  // Get all received messages for portfolio inbox
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
