import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  date: z.date({ required_error: "Date is required" }),
  image: z.any().optional(), // We'll handle file upload manually
  eventType: z.string().min(1, "Event type is required"),
  eventFormat: z.string().min(1, "Event format is required"),
  duration: z.string().min(1, "Duration is required"),
});

export type EventFormValues = z.infer<typeof eventFormSchema>;