import { Event } from "@/lib/types";
import EventCard from "./event-card";

interface EventsListProps {
  events: Event[];
}

export default function EventsList({ events }: EventsListProps) {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         {events.map((event) => (
            <EventCard key={event.id} {...event} />
         ))}
      </div>
   );
}