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

  const httpServer = createServer(app);
  return httpServer;
}
