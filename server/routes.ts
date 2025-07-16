import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully", id: message.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ success: false, message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
