import { fetchEventById } from "@/lib/events";

export default async function EventPage ({
   params,
}: {
   params: {id: string}
}) {
   const event = await fetchEventById(params.id);

   return (
      <div>
         {event ? (
            <>
               <h2>{event.title}</h2>
               <p>{event.description}</p>
               {/* <img src={event.img} alt={event.title} /> */}
            </>
         ) : (
            <p>Event not found</p>
         )}
      </div>
   );
}