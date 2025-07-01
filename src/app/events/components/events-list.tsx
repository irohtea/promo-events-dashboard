import { Event } from "@/lib/types";
import EventCard from "./event-card";

interface EventsListProps {
  events: Event[];
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {events.map((event) => (
        <div key={event.id} className="break-inside-avoid">
          <EventCard {...event} />
        </div>
      ))}
    </div>
  );
}