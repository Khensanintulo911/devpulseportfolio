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
      name: "Khensani Ntulo",
      bio: "Aspiring professional with a unique blend of engineering background and emerging software development skills. Experienced in maintaining business systems and developing custom full-stack solutions. Currently focused on building robust applications using React, Express, and Python to solve real-world operational challenges.",
      location: "Gauteng, Alberton 1458",
      linkedinUrl: "https://linkedin.com/in/khensani-ntulo",
      whatsappNumber: "27834913597",
      phoneNumber: "+27 83 491 3597",
      email: "danielntulo@gmail.com",
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

    // Initialize with all GitHub & production projects
    const initialProjects: InsertProject[] = [
      {
        title: "Admin Hub",
        description: "A custom-designed business operations system for MM All Electronics (Samsung Authorized Repair Center). Streamlined repair tracking and internal operations using React and Python backend.",
        techStack: JSON.stringify(["React", "Python", "PostgreSQL", "Cloud Infrastructure"]),
        repoUrl: "https://github.com/Khensanintulo911/adminhub",
        demoUrl: "https://hub.allelectronics.one/",
        imageUrl: "/project-images/adminhub pics (1).png",
        specifications: JSON.stringify([
          "Real-time repair tracking and status updates across service centers",
          "Internal operations dashboard for technician workload and dispatch management",
          "Customer-facing repair progress tracking portal",
          "Secure cloud-based database management with audit logging",
          "Integrated help desk and IT support ticketing system"
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
        title: "DevPulse FleetPro",
        description: "Comprehensive fleet and telematics management system for tracking vehicles, drivers, trips, jobs, and vehicle inspections with real-time GPS tracking, analytics, and compliance monitoring.",
        techStack: JSON.stringify(["React", "TypeScript", "Vite", "Express.js", "Node.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"]),
        repoUrl: "https://github.com/Khensanintulo911/devpulsefleetpro",
        demoUrl: "https://devpulsefleetpro.onrender.com",
        imageUrl: "/project-images/fleetpro_telematics_dashboard_1791387230781.jpg",
        specifications: JSON.stringify([
          "User authentication with role-based access control (admin, manager, driver, technician)",
          "Real-time GPS tracking and route visualization with Leaflet.js",
          "Vehicle management, driver profiles, and job assignment dispatch",
          "Trip management with event logging (delays, fuel stops, incidents, photos)",
          "Daily vehicle inspection workflows with 4-photo documentation",
          "Fuel consumption and odometer tracking with anomaly detection",
          "Printable trip sheet generation (HTML for browser print-to-PDF)",
          "Google Maps and Waze navigation integration",
          "Analytics dashboard with fleet performance metrics"
        ]),
        images: JSON.stringify([
          "/project-images/fleetpro_telematics_dashboard_1791387230781.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "DevPulse HR Portal",
        description: "Full-stack Human Resources Management System (HRMS) designed for streamlined employee administration, leave management workflows, and organizational oversight. Architected around Zoho Creator / Deluge enterprise automation logic.",
        techStack: JSON.stringify(["React 18", "TypeScript", "Express.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Zoho Deluge Logic"]),
        repoUrl: "https://github.com/Khensanintulo911/employee101",
        demoUrl: null,
        imageUrl: "/project-images/devpulse_hr_portal_1791989990427.jpg",
        specifications: JSON.stringify([
          "Executive Dashboard: Real-time visualization of HR metrics, employee distribution, and organizational activity",
          "Employee Directory: Centralized database for employee records with built-in validation for compliance (ID numbers, email formats)",
          "Leave Management: Automated leave request workflow with intelligent duration tracking and HR notification logic",
          "Disciplinary Tracking: Secure logging of workplace incidents and corrective actions",
          "Training & Growth: Comprehensive tracking of employee certifications and professional development",
          "Zoho Deluge-inspired automation workflows and Form Safeguard data validation principles"
        ]),
        images: JSON.stringify([
          "/project-images/devpulse_hr_portal_1791989990427.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "LTP Analysis Dashboard",
        description: "Streamlit-based data analytics application for analyzing Long Time Pending (LTP) appliances in repair shops. Features CSV/Excel upload, automatic LTP detection with category-specific thresholds, and interactive Plotly visualizations.",
        techStack: JSON.stringify(["Python", "Streamlit", "Spreadsheets", "Plotly", "Data Analytics"]),
        repoUrl: "https://github.com/Khensanintulo911/LTP-Analysis-Dashboard",
        demoUrl: "https://ltp-analysis-dashboard.onrender.com/",
        imageUrl: "/project-images/ltp_analytics_dashboard_1791387241412.jpg",
        specifications: JSON.stringify([
          "CSV/Excel upload functionality for repair shop spreadsheets",
          "Automatic LTP detection with category-specific turnaround thresholds",
          "Support for multiple appliance types (phones, fridges, washing machines, TV displays)",
          "Interactive Plotly visualizations and throughput velocity charts",
          "Filterable data tables for detailed operational root-cause analysis",
          "Stateless mode with session-based data uploads"
        ]),
        images: JSON.stringify([
          "/project-images/ltp_analytics_dashboard_1791387241412.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "StockTracker SA",
        description: "Modern inventory management system tailored for South African businesses. Features real-time stock tracking, sales processing in South African Rand (ZAR), low-stock alerts, and exportable reports.",
        techStack: JSON.stringify(["Python", "Django 5", "Bootstrap 5", "SQLite", "PostgreSQL", "ZAR Localization"]),
        repoUrl: "https://github.com/Khensanintulo911/stockifysa",
        demoUrl: null,
        imageUrl: "/project-images/stocktracker_inventory_system_1791387266597.jpg",
        specifications: JSON.stringify([
          "Real-time metrics, sales overview, and low-stock warning indicators",
          "Product management with SKU validation and inventory category classification",
          "Instant sales recording in South African Rand (ZAR R) with automatic stock deduction",
          "Exportable sales and inventory summaries with profit calculation",
          "Responsive mobile-first design built with Django templates and Bootstrap 5"
        ]),
        images: JSON.stringify([
          "/project-images/stocktracker_inventory_system_1791387266597.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "Fleet & Driver Telematics",
        description: "Telematics and vehicle monitoring system with mobile-friendly driver interface, GPS route logging, and Streamlit management analytics dashboard. Built with Django REST Framework and Leaflet.js.",
        techStack: JSON.stringify(["Django REST Framework", "Streamlit", "Leaflet.js", "PostgreSQL", "Plotly", "Python"]),
        repoUrl: "https://github.com/Khensanintulo911/vehicle-monitoring",
        demoUrl: null,
        imageUrl: "/project-images/fleetpro_telematics_dashboard_1791387230781.jpg",
        specifications: JSON.stringify([
          "Mobile driver interface with GPS coordinates capture and browser geolocation",
          "Trip logging (start → events → end) with delay and incident photo documentation",
          "Automatic distance, duration, fuel consumption, and route compliance calculations",
          "Streamlit analytics dashboard with Plotly charts and Folium route maps",
          "REST API endpoints for real-time mobile and dashboard integration"
        ]),
        images: JSON.stringify([
          "/project-images/fleetpro_telematics_dashboard_1791387230781.jpg"
        ]),
        videoUrl: null
      },
      {
        title: "VoteSphere: VoteSA",
        description: "Web-based democratic voting and civic engagement platform for South African political parties. Built with Django to provide secure authentication, party profile management, and verified election tallies.",
        techStack: JSON.stringify(["Django", "Python", "HTML5/CSS3", "PostgreSQL", "Civic Tech"]),
        repoUrl: "https://github.com/Khensanintulo911/votesphereSA",
        demoUrl: null,
        imageUrl: "/project-images/votesphere_voting_platform_1791387253477.jpg",
        specifications: JSON.stringify([
          "Secure user authentication and voter registration validation",
          "Political party profile management and manifesto presentation",
          "Real-time voting tally and result visualization",
          "Discussion forums for democratic engagement and civic debate"
        ]),
        images: JSON.stringify([
          "/project-images/votesphere_voting_platform_1791387253477.jpg"
        ]),
        videoUrl: null
      },
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
