export enum EventType {
  MEETUP = 'Meetup',
  WEBINAR = 'Webinar',
  SEMINAR = 'Seminar',
  WORKSHOP = 'Workshop',
  CONFERENCE = 'Conference',
  INFO_SESSION = 'Info Session'
}

export enum EventFormat {
  HYBRID = 'Hybrid',
  ONLINE = 'Online',
  OFFLINE = 'Offline'
}

export interface CreateEventDto {
  name: string;
  description: string;

  startDateTime: Date;
  endDateTime: Date;

  eventType: EventType;
  eventFormatType: EventFormat;
}

export interface UpdateEventDto {
  name?: string;
  description?: string;

  startDateTime?: Date;
  endDateTime?: Date;

  eventType?: EventType;
  eventFormatType?: EventFormat;
}

export interface Event {
  id: string;
  name: string;
  bannerUrl: string;
  description: string;

  startDateTime: Date;
  endDateTime: Date;

  eventType: EventType;
  durationInHours: number;
  eventFormatType: EventFormat;

  updatedAt: Date;
  createdAt: Date;
}

export interface EventApiResponse {
  id: string;
  name: string;
  bannerUrl: string;
  description: string;

  startDateTime: Date;
  endDateTime: Date;

  eventType: EventType;
  durationInHours: number;
  eventFormatType: EventFormat;

  updatedAt: Date;
  createdAt: Date;
}
