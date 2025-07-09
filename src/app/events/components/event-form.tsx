"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventFormSchema, EventFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import EventCard from "./event-card";
import { useEffect, useState } from "react";
import { Datepicker } from "@/components/ui/datepicker";
// import EmailPreviewRenderer from "./email-preview-render";
import EmailBuilder from "./email-builder";

export default function EventForm() {

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: new Date(),
      image: undefined, // Default value for image, as the file input
      eventType: "", // Default value for eventType
      eventFormat: "", // Default value for eventFormat
      duration: "", // Default value for duration
      // image is handled manually
    },
  });

  const watchFields = form.watch();
  // Watch the image field to get the file input
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

  // Convert file to preview URL 

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

  const [emailBlock, setEmailBlock] = useState<string[]>([]);

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
    <div>
      {/* FORM */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Step 1: Event Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Step 1: Event Details</h2>

            <div className="space-y-2 ">
              <Label htmlFor="image">Image</Label>
              <Input type="file" id="image" {...form.register("image")} />
            </div>

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

            <div className="flex  gap-6 flex-wrap space-y-2"> 
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type</Label>
                <Select onValueChange={(value) => form.setValue("eventType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event type" />
                    </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Meetup">Meetup</SelectItem>
                    <SelectItem value="Webinar">Webinar</SelectItem>
                    <SelectItem value="Seminar">Seminar</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Conference">Conference</SelectItem>
                    <SelectItem value="Info Session">Info Session</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventFormat">Event Format</Label>
                <Select onValueChange={(value) => form.setValue("eventFormat", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event format" />
                    </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                    <SelectItem value="Offline">Offline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Controller
                control={form.control}
                name="date"
                render={({ field }) => (
                  <Datepicker
                    value={field.value}
                    onDateChange={field.onChange}
                    onDurationChange={(minutes) => form.setValue("duration", `${minutes} minutes`)}
                  />
                )}
              />
            </div>
       

          </div>
          {/* PREVIEW CARD */}
          <div className="space-y-4">
            <Label className="block mb-2 text-muted-foreground">Preview</Label>
            <EventCard
              id="preview"
              title={watchFields.title || "Event Title"}
              description={watchFields.description || "Event description goes here..."}
              img={imagePreview}
              eventType={watchFields.eventType || "Webinar"}
              eventFormat={watchFields.eventFormat || "Online"}
              duration={watchFields.duration || "30 minutes"}
              date={watchFields.date || new Date()}
              isPreview={true} 
            />
          </div>
        </div>
        {/* Step 2: Create Templates */}
        {/* <Button type="submit">Create Event</Button> */}
      </form>

      <div className="">
        <div className="space-y-4">
            <h2 className="text-2xl font-bold my-6">Step 2: Create Templates</h2>
            {/* Email Builder */}
            <div>
              {emailBlock.map((blockId) => (
                <EmailBuilder key={blockId} />
              ))}
            </div>
            {emailBlock.length > 0 ? (
              <div className="mt-4 h-1 w-full bg-neutral-500"></div>
            ) : (
              <p className="text-muted-foreground">No email blocks created yet.</p>
            )}
          <Button
            type="button"
            onClick={() => {
              const newId = `block-${emailBlock.length + 1}`;
              setEmailBlock((prev) => [...prev, newId]);
            }}
          >
            Add Email Block
          </Button>
        </div>
      </div>

    </div>

  );
}
