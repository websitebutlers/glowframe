import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  ageRange: text("age_range").notNull(),
  gender: text("gender").notNull(),
  race: text("race").notNull(),
  professionalBackground: text("professional_background").notNull(),
  primaryFields: text("primary_fields").array().notNull(),
  experience: text("experience").notNull(),
  portfolioLinks: text("portfolio_links"),
  workshopGoals: text("workshop_goals"),
  challenges: text("challenges"),
  presentWork: boolean("present_work").default(false),
  workDescription: text("work_description"),
  connectWith: text("connect_with").array(),
  hearAbout: text("hear_about"),
  mailingList: boolean("mailing_list").default(false),
  additionalComments: text("additional_comments"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  email: text("email"),
  name: text("name"),
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const apprenticeInquiries = pgTable("apprentice_inquiries", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  ageRange: text("age_range").notNull(),
  interests: text("interests").array().notNull(),
  experience: text("experience"),
  goals: text("goals"),
  hearAbout: text("hear_about"),
  mailingList: boolean("mailing_list").default(false),
  termsAccepted: boolean("terms_accepted").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const mailingList = pgTable("mailing_list", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertApplicationSchema = createInsertSchema(applications).omit({
  id: true,
  createdAt: true,
});

export const insertDonationSchema = createInsertSchema(donations).omit({
  id: true,
  createdAt: true,
  stripePaymentIntentId: true,
  status: true,
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertApprenticeInquirySchema = createInsertSchema(apprenticeInquiries).omit({
  id: true,
  createdAt: true,
});

export const insertMailingListSchema = createInsertSchema(mailingList).omit({
  id: true,
  createdAt: true,
});

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applications.$inferSelect;
export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Donation = typeof donations.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertApprenticeInquiry = z.infer<typeof insertApprenticeInquirySchema>;
export type ApprenticeInquiry = typeof apprenticeInquiries.$inferSelect;
export type InsertMailingList = z.infer<typeof insertMailingListSchema>;
export type MailingList = typeof mailingList.$inferSelect;
