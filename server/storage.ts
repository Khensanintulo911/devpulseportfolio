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
      tagline: "Aspiring Full-Stack Developer | Python • Django • JavaScript/TypeScript",
      education: JSON.stringify([
        "Tech Bridle Foundation - Fullstack Program (10 Months, Hybrid)",
        "HyperionDev Software Engineering Bootcamp (Completed)",
        "BSc Mining Engineering (2 years) - Wits University",
        "Matric Certificate - Eden Ridge High School"
      ]),
      skills: JSON.stringify([
        "Python (Django, Flask)",
        "JavaScript (TypeScript, React)",
        "Express.js & Node.js",
        "Drizzle ORM & SQL",
        "HTML/CSS",
        "Git/GitHub",
        "MATLAB & AutoCAD"
      ])
    };

    // Initialize with projects
    const initialProjects: InsertProject[] = [
      {
        title: "Fleet Management System",
        description: "Developing a system to track technicians and monitor company vehicle usage. Focused on improving operational transparency using React, Express, and PostgreSQL.",
        techStack: JSON.stringify(["React", "TypeScript", "Node.js", "Express", "PostgreSQL"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "https://images.unsplash.com/photo-1590412200988-a436bb7050a8"
      },
      {
        title: "All Electronics Hub",
        description: "A custom business operations system for MM All Electronics. Streamlined repair tracking and internal operations using React and Python backend.",
        techStack: JSON.stringify(["React", "Python", "Cloud Infrastructure", "PostgreSQL"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: "https://hub.allelectronics.one/",
        imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
      },
      {
        title: "VoteSphere: VoteSA",
        description: "A web-based voting platform for South African political parties. Built with Django to ensure secure voting and democratic engagement.",
        techStack: JSON.stringify(["Django", "Python", "HTML/CSS", "PostgreSQL"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c"
      },
      {
        title: "StockTracker SA",
        description: "Inventory management for small businesses. Features real-time tracking, profit calculation, and expiry alerts built with Python and Django.",
        techStack: JSON.stringify(["Python", "Django", "HTML/CSS", "SQLite"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
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
      imageUrl: insertProject.imageUrl || null
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
