
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  img?: string; // optional, fallback if not provided
  eventType: string;
  eventFormat: string;
  duration: string;
  date: Date;
  isPreview?: boolean; // optional, for preview mode
}

export default function EventCard({ id, title, description, img, eventType, eventFormat, duration, date, isPreview }: EventCardProps) {
  return (
    <Card 
      className="w-full max-w-md bg-gradient-to-br from-blue-500 to-purple-500 
             text-white rounded-2xl shadow-lg transition-transform 
             flex flex-col justify-between ">
      <CardHeader>
        {img ? (
          <Image
            width={150}
            height={150}
            src={img}
            alt={title}
            className="h-40 w-full object-cover rounded-xl mb-4"
          />
        ) : (
          <div className="h-40 w-full bg-white/20 rounded-xl mb-4" />
        )}
        <CardTitle className="flex flex-wrap items-center justify-between text-sm gap-2">
          <span className="text-xl font-semibold">{title}</span>
          <span className="bg-white/20 text-white rounded-md px-2 py-1">{eventType}</span>
        </CardTitle>
        <CardDescription className="text-white opacity-90 text-sm ">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-1.5 space-y-2">

        <div className="flex items-center justify-between text-sm">
          <span className="text-white/70 font-medium">Format</span>
          <span className="font-semibold">{eventFormat}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/70 font-medium">Duration</span>
          <span className="font-semibold">{duration}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/70 font-medium">Date</span>
          <span className="font-semibold">{`${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</span>
        </div>
      </CardContent>
      {isPreview ? (
      <CardFooter className="mt-auto flex justify-between items-center px-6 pb-6 pt-2">
              <button
                className="text-sm font-medium underline"
              >
                Read more
              </button>
              <button
                className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm"
              >
                Enroll
              </button>
      </CardFooter>
      ) : <CardFooter className="mt-auto flex justify-between items-center px-6 pb-6 pt-2">
        <CardAction>
            <Link href={`/events/${id}`} className="text-white">
               <Button variant="secondary" className="w-full">
                  <Edit /> Edit
               </Button>
            </Link>
        </CardAction>
      </CardFooter>
      }
    </Card>
  );
}
