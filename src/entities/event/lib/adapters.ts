import { EventApiResponse, Event } from '../model/types';

export const adaptEventFromApi = (eventApiResponse: EventApiResponse): Event => ({
  id: eventApiResponse.id,
  name: eventApiResponse.name,
  eventType: eventApiResponse.eventType,
  bannerUrl: eventApiResponse.bannerUrl,
  updatedAt: eventApiResponse.updatedAt,
  createdAt: eventApiResponse.createdAt,
  endDateTime: eventApiResponse.endDateTime,
  description: eventApiResponse.description,
  startDateTime: eventApiResponse.startDateTime,
  durationInHours: eventApiResponse.durationInHours,
  eventFormatType: eventApiResponse.eventFormatType
});
