import { users, applications, donations, apprenticeInquiries, mailingList, type User, type InsertUser, type Application, type InsertApplication, type Donation, type InsertDonation, type ApprenticeInquiry, type InsertApprenticeInquiry, type MailingList, type InsertMailingList } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createApplication(application: InsertApplication): Promise<Application>;
  getApplications(): Promise<Application[]>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  updateDonationStatus(id: number, status: string, stripePaymentIntentId?: string): Promise<Donation | undefined>;
  createApprenticeInquiry(inquiry: InsertApprenticeInquiry): Promise<ApprenticeInquiry>;
  getApprenticeInquiries(): Promise<ApprenticeInquiry[]>;
  createMailingListEntry(entry: InsertMailingList): Promise<MailingList>;
  getMailingList(): Promise<MailingList[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private applications: Map<number, Application>;
  private donations: Map<number, Donation>;
  private mailingListEntries: Map<number, MailingList>;
  private apprenticeInquiries: Map<number, ApprenticeInquiry>;
  private currentUserId: number;
  private currentApplicationId: number;
  private currentDonationId: number;
  private currentMailingListId: number;
  private currentApprenticeInquiryId: number;

  constructor() {
    this.users = new Map();
    this.applications = new Map();
    this.donations = new Map();
    this.mailingListEntries = new Map();
    this.apprenticeInquiries = new Map();
    this.currentUserId = 1;
    this.currentApplicationId = 1;
    this.currentDonationId = 1;
    this.currentMailingListId = 1;
    this.currentApprenticeInquiryId = 1;
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

  async createApprenticeInquiry(insertInquiry: InsertApprenticeInquiry): Promise<ApprenticeInquiry> {
    const id = this.currentApprenticeInquiryId++;
    const inquiry: ApprenticeInquiry = {
      ...insertInquiry,
      experience: insertInquiry.experience || null,
      hearAbout: insertInquiry.hearAbout || null,
      mailingList: insertInquiry.mailingList ?? false,
      goals: insertInquiry.goals || null,
      id,
      createdAt: new Date()
    };
    this.apprenticeInquiries.set(id, inquiry);
    return inquiry;
  }

  async getApprenticeInquiries(): Promise<ApprenticeInquiry[]> {
    return Array.from(this.apprenticeInquiries.values());
  }

  async createMailingListEntry(insertEntry: InsertMailingList): Promise<MailingList> {
    const id = this.currentMailingListId++;
    const entry: MailingList = { 
      ...insertEntry, 
      id, 
      createdAt: new Date() 
    };
    this.mailingListEntries.set(id, entry);
    return entry;
  }

  async getMailingList(): Promise<MailingList[]> {
    return Array.from(this.mailingListEntries.values());
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createApplication(insertApplication: InsertApplication): Promise<Application> {
    const [application] = await db
      .insert(applications)
      .values(insertApplication)
      .returning();
    return application;
  }

  async getApplications(): Promise<Application[]> {
    return await db.select().from(applications);
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const [donation] = await db
      .insert(donations)
      .values({ ...insertDonation, status: 'pending' })
      .returning();
    return donation;
  }

  async updateDonationStatus(id: number, status: string, stripePaymentIntentId?: string): Promise<Donation | undefined> {
    const [donation] = await db
      .update(donations)
      .set({ 
        status, 
        stripePaymentIntentId
      })
      .where(eq(donations.id, id))
      .returning();
    return donation || undefined;
  }

  async createApprenticeInquiry(insertInquiry: InsertApprenticeInquiry): Promise<ApprenticeInquiry> {
    const [inquiry] = await db
      .insert(apprenticeInquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getApprenticeInquiries(): Promise<ApprenticeInquiry[]> {
    return await db.select().from(apprenticeInquiries);
  }

  async createMailingListEntry(insertEntry: InsertMailingList): Promise<MailingList> {
    const [entry] = await db
      .insert(mailingList)
      .values(insertEntry)
      .returning();
    return entry;
  }

  async getMailingList(): Promise<MailingList[]> {
    return await db.select().from(mailingList);
  }
}

// Use memory storage if no database URL is provided (for local development)
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
