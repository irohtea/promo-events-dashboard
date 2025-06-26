import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  date: z.date({ required_error: "Date is required" }),
  image: z.any().optional(), // We'll handle file upload manually
});

export type EventFormValues = z.infer<typeof eventFormSchema>;