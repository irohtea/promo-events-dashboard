export interface Event {
   id: string;
   title: string;
   description: string;
   img: string | undefined;
   eventType: string;
   eventFormat: string;
   duration: string;
   date: Date;
}