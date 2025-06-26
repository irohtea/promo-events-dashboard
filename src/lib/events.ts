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
      description: "Description for Event 1",
      img: undefined,
    },
    {
      id: "2",
      title: "Event 2",
      description: "Description for Event 2",
      img: undefined,   
    },
    {
      id: "3",
      title: "Event 3",
      description: "Description for Event 3",
      img: undefined,
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
   };
}