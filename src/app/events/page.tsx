import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import EventsList from "./components/events-list";
import { fetchEvents } from "@/lib/events";

export default async function EventsPage() {
   const events = await fetchEvents();
  return (
    <div className="w-full">
      <div className="flex justify-end mb-4">
        <Link href="/events/create">
          <Button variant="default">
            <Plus className="mr-2 h-4 w-4" /> Create Event
          </Button>
        </Link>
      </div>
      <div>
        {/* event list  here */}
         <h1 className="text-2xl font-bold mb-4">Ongoing Events</h1>
         <div className="grid gap-4">
            <EventsList events={events}/>
         </div>
      </div>
    </div>
  );
}
