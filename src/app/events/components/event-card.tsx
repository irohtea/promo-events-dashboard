
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  img?: string; // optional, fallback if not provided
}

export default function EventCard({ id, title, description, img }: EventCardProps) {
  return (
    <Card 
      className="w-full max-w-md bg-gradient-to-br from-blue-500 to-purple-500 
             text-white rounded-2xl shadow-lg transition-transform 
             flex flex-col justify-between h-[400px] md:h-[450px]">
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
        <CardTitle className="text-xl font-semibold">
            {title}
        </CardTitle>
        <CardDescription className="text-white opacity-90 text-sm line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-auto flex justify-between items-center px-6 pb-6 pt-2">
        <CardAction>
            <Link href={`/events/${id}`} className="text-white">
               <Button variant="secondary" className="w-full">
                  <Edit /> Edit
               </Button>
            </Link>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
