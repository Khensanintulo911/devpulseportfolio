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
      bio: "Aspiring professional with a unique blend of engineering background and emerging software development skills. Experienced in designing, developing, and maintaining custom software solutions and Android applications. Currently leveling up through full-stack programs to bridge the gap between traditional engineering and modern digital solutions.",
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
        "Android Dev (Java, Kotlin)",
        "HTML/CSS",
        "SQL (PostgreSQL, MySQL, SQLite)",
        "Cloud Infrastructure & Security",
        "Git/GitHub",
        "MATLAB & AutoCAD"
      ])
    };

    // Initialize with projects
    const initialProjects: InsertProject[] = [
      {
        title: "All Electronics Hub",
        description: "A custom-designed business operations system for MM All Electronics (Samsung Repair Center). Streamlines repair tracking, internal operations, and customer-facing interfaces.",
        techStack: JSON.stringify(["React", "TypeScript", "Python", "Cloud Infrastructure", "Database Management"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: "https://hub.allelectronics.one/",
        imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
      },
      {
        title: "VoteSphere: VoteSA",
        description: "A comprehensive web-based voting platform designed for South African political parties. Enables users to learn about political parties, engage in discussions, and cast secure votes online.",
        techStack: JSON.stringify(["Django", "Python", "HTML/CSS", "JavaScript", "PostgreSQL"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c"
      },
      {
        title: "StockTracker SA",
        description: "An inventory management system built for small-scale businesses in South Africa. Tracks stock levels, calculates profits, flags expired goods, and identifies moving products.",
        techStack: JSON.stringify(["Python", "Django", "HTML/CSS", "SQLite"]),
        repoUrl: "https://github.com/Khensanintulo911/Khensani-Ntulo",
        demoUrl: null,
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      },
      {
        title: "Klasora",
        description: "An innovative academic platform connecting teachers and students. Features grade selection, subject management, and progress tracking.",
        techStack: JSON.stringify(["Django", "HTML", "CSS", "JavaScript", "SQL"]),
        repoUrl: "https://github.com/Khensanintulo911/Klasora",
        demoUrl: null,
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
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
