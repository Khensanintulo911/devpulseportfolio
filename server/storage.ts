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
      name: "Khensani Daniel Ntulo",
      bio: "I'm the founder of Dev Pulse - a technology brand focused on building innovative solutions that bridge engineering and software development. My journey from Mining Engineering at Wits University to full-stack development represents the evolution of traditional engineering into the digital age. Currently completing the HyperionDev Graduate Program and actively seeking opportunities to apply my skills in real-world projects.",
      location: "Gauteng, Alberton 1458",
      linkedinUrl: null,
      whatsappNumber: null,
      phoneNumber: null,
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
    const profile: Profile = { 
      id,
      name: insertProfile.name,
      bio: insertProfile.bio,
      location: insertProfile.location || null,
      linkedinUrl: insertProfile.linkedinUrl || null,
      whatsappNumber: insertProfile.whatsappNumber || null,
      phoneNumber: insertProfile.phoneNumber || null
    };
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
