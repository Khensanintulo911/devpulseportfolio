import { type User, type InsertUser, type Profile, type InsertProfile, type UpdateProfile, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProfile(): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  updateProfile(profile: UpdateProfile): Promise<Profile | undefined>;
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, Project>;
  private profile: Profile | undefined;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    
    // Initialize with default profile
    this.profile = {
      id: randomUUID(),
      name: "Khensani Daniel Ntulo",
      bio: "Aspiring professional with a unique blend of engineering background and emerging software development skills. Experienced in maintaining business systems and developing custom full-stack solutions. Currently focused on building robust applications using React, Express, and Python to solve real-world operational challenges.",
      location: "Gauteng, Alberton 1458",
      linkedinUrl: "https://linkedin.com/in/khensani-ntulo",
      whatsappNumber: "27763456789",
      phoneNumber: "+27 76 345 6789",
      email: "khensanintulo@gmail.com",
      tagline: "Full-Stack Developer & Data Science Practitioner | Power BI • Spreadsheets • React • Python",
      education: JSON.stringify([
        "Data Science Practitioner (NQF Level 5) - IQbusiness Learnership Programme (Current)",
        "Coursera - Professional Data Analytics Program (Enrolled / Current)",
        "HyperionDev Software Engineering Bootcamp & Graduate Program (Graduate)",
        "BSc Mining (2 years) - University of the Witwatersrand",
        "National Senior Certificate - Eden Ridge High School"
      ]),
      skills: JSON.stringify([
        "Microsoft Power BI (DAX, Power Query)",
        "Advanced Spreadsheets (Excel / Google Sheets)",
        "SQL for Analytics & Data Modeling",
        "Data Visualization & Executive Reporting",
        "Python (Django, Flask, Scripting)",
        "JavaScript & TypeScript (React)",
        "Express.js & Node.js",
        "Git/GitHub, AutoCAD & MATLAB"
      ])
    };

    // Initialize with projects
    const initialProjects: InsertProject[] = [
      {
        title: "Enterprise Operations & BI Dashboard",
        description: "Executive Business Intelligence dashboard built with Microsoft Power BI and Advanced Excel. Streamlines repair turnarounds, technician productivity, SLA compliance, and operational KPI reporting.",
        techStack: JSON.stringify(["Power BI", "DAX", "Power Query", "Advanced Excel", "SQL", "Data Modeling"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "/project-images/powerbi_executive_dashboard_1791388236232.jpg",
        specifications: JSON.stringify([
          "Automated ETL pipeline using Power Query to ingest and clean raw spreadsheet work-order exports",
          "Star schema relational data model connecting technician logs, repair tickets, and parts inventory",
          "Custom DAX measures for dynamic time-intelligence (MoM turnaround variance, SLA fulfillment rate %)",
          "Interactive drill-down matrix by appliance category, technician efficiency, and repair status",
          "Executive summary view with high-level KPI cards and automated SLA threshold alerting"
        ]),
        images: JSON.stringify([
          "/project-images/powerbi_executive_dashboard_1791388236232.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "FleetPro",
        description: "Comprehensive fleet management system for tracking vehicles, drivers, trips, jobs, and vehicle inspections with real-time GPS tracking, analytics, and compliance monitoring.",
        techStack: JSON.stringify(["React", "TypeScript", "Vite", "Express.js", "Node.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"]),
        repoUrl: "https://github.com/Khensanintulo911/devpulsefleetpro",
        demoUrl: "https://devpulsefleetpro.onrender.com",
        imageUrl: "/project-images/fleetpro_telematics_dashboard_1791387230781.jpg",
        specifications: JSON.stringify([
          "User authentication with role-based access control (admin, manager, driver, technician)",
          "Real-time GPS tracking and route visualization with Leaflet.js",
          "Vehicle management, driver profiles, and job assignment",
          "Trip management with event logging (delays, fuel stops, incidents, photos)",
          "Daily vehicle inspection workflows with 4-photo documentation",
          "Fuel consumption and odometer tracking",
          "Printable trip sheet generation (HTML for browser print-to-PDF)",
          "Google Maps and Waze navigation integration",
          "Analytics dashboard with performance metrics"
        ]),
        images: JSON.stringify([
          "/project-images/fleetpro_telematics_dashboard_1791387230781.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "Admin Hub",
        description: "A custom-designed business operations system for MM All Electronics (Samsung Repair Center). Streamlined repair tracking and internal operations using React and Python backend.",
        techStack: JSON.stringify(["React", "Python", "Cloud Infrastructure", "PostgreSQL"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: "https://hub.allelectronics.one/",
        imageUrl: "/project-images/adminhub pics (1).png",
        specifications: JSON.stringify([
          "Real-time repair tracking and status updates",
          "Internal operations dashboard for technician management",
          "Customer-facing progress portal",
          "Secure cloud-based database management",
          "Integrated help desk and IT support system"
        ]),
        images: JSON.stringify([
          "/project-images/adminhub pics (1).png",
          "/project-images/adminhub pics (2).png",
          "/project-images/adminhub pics (3).png",
          "/project-images/adminhub pics (4).png",
          "/project-images/adminhub pics (5).png",
          "/project-images/adminhub pics (6).png",
          "/project-images/adminhub pics (7).png"
        ]),
        videoUrl: null
      },
      {
        title: "LTP Analysis Dashboard",
        description: "Streamlit-based web application for analyzing Long Time Pending (LTP) appliances in repair shops. MVP complete with CSV/Excel upload, automatic LTP detection with category-specific thresholds, and interactive visualizations.",
        techStack: JSON.stringify(["Python", "Streamlit", "Spreadsheets", "Plotly", "Data Analysis"]),
        repoUrl: "https://github.com/Khensanintulo911/LTP-Analysis-Dashboard",
        demoUrl: "https://ltp-analysis-dashboard.onrender.com/",
        imageUrl: "/project-images/ltp_analytics_dashboard_1791387241412.jpg",
        specifications: JSON.stringify([
          "CSV/Excel upload functionality for repair shop data",
          "Automatic LTP detection with category-specific time thresholds",
          "Support for multiple appliance types (phones, fridges, washing machines, etc.)",
          "Interactive Plotly visualizations and charts",
          "Filterable data tables for detailed analysis",
          "Stateless mode with session-based data uploads"
        ]),
        images: JSON.stringify([
          "/project-images/ltp_analytics_dashboard_1791387241412.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "VoteSphere: VoteSA",
        description: "A web-based voting platform for South African political parties. Built with Django to ensure secure voting and democratic engagement.",
        techStack: JSON.stringify(["Django", "Python", "HTML/CSS", "PostgreSQL"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "/project-images/votesphere_voting_platform_1791387253477.jpg",
        specifications: JSON.stringify([
          "Secure user authentication and registration",
          "Political party profile management",
          "Real-time voting and result visualization",
          "Discussion forums for democratic engagement"
        ]),
        images: JSON.stringify([
          "/project-images/votesphere_voting_platform_1791387253477.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "StockTracker SA",
        description: "Inventory management for small businesses. Features real-time tracking, profit calculation, and expiry alerts built with Python and Django.",
        techStack: JSON.stringify(["Python", "Django", "HTML/CSS", "SQLite"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "/project-images/stocktracker_inventory_system_1791387266597.jpg",
        specifications: JSON.stringify([
          "Automated inventory tracking and low-stock alerts",
          "Profit and loss reporting dashboards",
          "Product expiry date monitoring",
          "Sales history and fast-moving product analysis"
        ]),
        images: JSON.stringify([
          "/project-images/stocktracker_inventory_system_1791387266597.jpg"
        ]),
        videoUrl: null
      }
    ];

    initialProjects.forEach(p => this.createProject(p));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProfile(): Promise<Profile | undefined> {
    return this.profile;
  }

  async createProfile(insertProfile: InsertProfile): Promise<Profile> {
    const id = randomUUID();
    const profile: Profile = { 
      id,
      ...insertProfile,
      location: insertProfile.location || null,
      linkedinUrl: insertProfile.linkedinUrl || null,
      whatsappNumber: insertProfile.whatsappNumber || null,
      phoneNumber: insertProfile.phoneNumber || null,
      email: insertProfile.email || null,
      tagline: insertProfile.tagline || null,
      education: insertProfile.education || "[]",
      skills: insertProfile.skills || "[]"
    };
    this.profile = profile;
    return profile;
  }

  async updateProfile(updateProfile: UpdateProfile): Promise<Profile | undefined> {
    if (!this.profile) return undefined;
    this.profile = { 
      ...this.profile, 
      ...updateProfile,
      education: updateProfile.education ?? this.profile.education,
      skills: updateProfile.skills ?? this.profile.skills
    };
    return this.profile;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      id,
      ...insertProject,
      techStack: insertProject.techStack || "[]",
      repoUrl: insertProject.repoUrl || null,
      demoUrl: insertProject.demoUrl || null,
      imageUrl: insertProject.imageUrl || null,
      specifications: insertProject.specifications || "[]",
      images: insertProject.images || "[]",
      videoUrl: insertProject.videoUrl || null
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
