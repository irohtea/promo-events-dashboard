import { Event } from "@/lib/types";

export async function fetchEvents():Promise<Event[]> {
   // const res = await fetch("https://api.example.com/cards", {
   //    cache: "default"
   // });
   // if (!res.ok) throw new Error('Failed to fetch cards');
   // return res.json();

  return [
    {
      id: "1",
      title: "Event 1",
      description: "Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: undefined,
      eventType: "Webinar",
      eventFormat: "Online",
      duration: "1 hour",
      date: new Date("2023-10-01T10:00:00Z"),
    },
    {
      id: "2",
      title: "Event 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: undefined, 
      eventType: "Webinar",
      eventFormat: "Online",
      duration: "1 hour",
      date: new Date("2023-10-01T10:00:00Z"),  
    },
    {
      id: "3",
      title: "Event 3",
      description: "Description for Event 3 ",
      img: undefined,
      eventType: "Webinar",
      eventFormat: "Online",
      duration: "1 hour",
      date: new Date("2023-10-01T10:00:00Z"),
    },
    {
      id: "4",
      title: "Event 1",
      description: "Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: undefined,
      eventType: "Webinar",
      eventFormat: "Online",
      duration: "1 hour",
      date: new Date("2023-10-01T10:00:00Z"),
    },
    {
      id: "5",
      title: "Event 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: undefined, 
      eventType: "Webinar",
      eventFormat: "Online",
      duration: "1 hour",
      date: new Date("2023-10-01T10:00:00Z"),  
    },
    {
      id: "6",
      title: "Event 3",
      description: "Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum 100 dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: undefined,
      eventType: "Webinar",
      eventFormat: "Online",
      duration: "1 hour",
      date: new Date("2023-10-01T10:00:00Z"),
    },
  ];
}

export async function fetchEventById(id: string): Promise<Event | null> {
   // const res = await fetch(`https://api.example.com/events/${id}`, {
   //    cache: "no-store",
   // });
   // if (!res.ok) return null;
   // return res.json();

   return {
      id: id,
      title: `Event ${id}`,
      description: `Description for Event ${id}`,
      img: "https://via.placeholder.com/150",
      eventType: "Webinar",
      eventFormat: "Online",
      duration: "1 hour",
      date: new Date("2023-10-01T10:00:00Z"),  
   };
}