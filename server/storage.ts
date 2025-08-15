import { type User, type InsertUser, type Profile, type InsertProfile, type UpdateProfile } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProfile(): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  updateProfile(profile: UpdateProfile): Promise<Profile | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private profile: Profile | undefined;

  constructor() {
    this.users = new Map();
    // Initialize with default profile
    this.profile = {
      id: randomUUID(),
      name: "Dev Pulse Developer",
      bio: "I'm a passionate full-stack developer with expertise in creating innovative web applications that solve real-world problems. My journey in technology has led me to develop comprehensive solutions ranging from political engagement platforms to business management systems.",
      linkedinUrl: "",
      whatsappNumber: "",
      phoneNumber: "",
    };
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
    const profile: Profile = { ...insertProfile, id };
    this.profile = profile;
    return profile;
  }

  async updateProfile(updateProfile: UpdateProfile): Promise<Profile | undefined> {
    if (!this.profile) {
      return undefined;
    }
    
    this.profile = { ...this.profile, ...updateProfile };
    return this.profile;
  }
}

export const storage = new MemStorage();
