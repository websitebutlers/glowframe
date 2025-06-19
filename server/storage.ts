import { users, applications, donations, type User, type InsertUser, type Application, type InsertApplication, type Donation, type InsertDonation } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createApplication(application: InsertApplication): Promise<Application>;
  getApplications(): Promise<Application[]>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  updateDonationStatus(id: number, status: string, stripePaymentIntentId?: string): Promise<Donation | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private applications: Map<number, Application>;
  private donations: Map<number, Donation>;
  private currentUserId: number;
  private currentApplicationId: number;
  private currentDonationId: number;

  constructor() {
    this.users = new Map();
    this.applications = new Map();
    this.donations = new Map();
    this.currentUserId = 1;
    this.currentApplicationId = 1;
    this.currentDonationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createApplication(insertApplication: InsertApplication): Promise<Application> {
    const id = this.currentApplicationId++;
    const application: Application = { 
      ...insertApplication,
      portfolioLinks: insertApplication.portfolioLinks || null,
      workshopGoals: insertApplication.workshopGoals || null,
      challenges: insertApplication.challenges || null,
      workDescription: insertApplication.workDescription || null,
      connectWith: insertApplication.connectWith || null,
      hearAbout: insertApplication.hearAbout || null,
      additionalComments: insertApplication.additionalComments || null,
      presentWork: insertApplication.presentWork ?? false,
      mailingList: insertApplication.mailingList ?? false,
      id, 
      createdAt: new Date() 
    };
    this.applications.set(id, application);
    return application;
  }

  async getApplications(): Promise<Application[]> {
    return Array.from(this.applications.values());
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = this.currentDonationId++;
    const donation: Donation = {
      ...insertDonation,
      email: insertDonation.email || null,
      name: insertDonation.name || null,
      id,
      status: "pending",
      stripePaymentIntentId: null,
      createdAt: new Date()
    };
    this.donations.set(id, donation);
    return donation;
  }

  async updateDonationStatus(id: number, status: string, stripePaymentIntentId?: string): Promise<Donation | undefined> {
    const donation = this.donations.get(id);
    if (donation) {
      donation.status = status;
      if (stripePaymentIntentId) {
        donation.stripePaymentIntentId = stripePaymentIntentId;
      }
      this.donations.set(id, donation);
      return donation;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
