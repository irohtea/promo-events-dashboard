"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventFormSchema, EventFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import EventCard from "./event-card";
import { useEffect, useState } from "react";

export default function EventForm() {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: new Date(),
      // image is handled manually
    },
  });

  const watchFields = form.watch();
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

  // 👇 Convert file to preview URL
  useEffect(() => {
    const fileList = watchFields.image as unknown as FileList | undefined;
    if (fileList && fileList[0]) {
      const file = fileList[0];
      const url = URL.createObjectURL(file);
      setImagePreview(url);

      // Cleanup the URL when component unmounts or file changes
      return () => URL.revokeObjectURL(url);
    }
  }, [watchFields.image]);

  const onSubmit = async (data: EventFormValues) => {
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to create event");
      console.log("Event created!");
    } catch (err) {
      console.error("Error creating event:", err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* FORM */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...form.register("title")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            rows={4}
            {...form.register("description")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input type="file" id="image" {...form.register("image")} />
        </div>

        <div className="space-y-2">
          <Label>Date</Label>
          <Calendar
            mode="single"
            selected={watchFields.date}
            onSelect={(date) => form.setValue("date", date ?? new Date())}
            className="rounded-md border"
          />
        </div>

        <Button type="submit">Create Event</Button>
      </form>

      {/* PREVIEW */}
      <div className="space-y-4">
        <Label className="block mb-2 text-muted-foreground">Preview</Label>
        <EventCard
          id="preview"
          title={watchFields.title || "Event Title"}
          description={watchFields.description || "Event description goes here..."}
          img={imagePreview}
        />
      </div>
    </div>
  );
}
