import { useQuery } from '@tanstack/react-query';
import { Event } from '../model/types';
import { adaptEventFromApi } from '../lib/adapters';
import { apiInstance } from '@/shared/api/base';

interface EventsListParams {
  page: number;
  limit: number;
}

const fetchEventsList = async ({ page, limit }: EventsListParams): Promise<Event[]> => {
  const res = await apiInstance.get('/events', { params: { page, limit } });
  console.log(res.data.data);
  return res.data.data.map(adaptEventFromApi);
};

export const useEventsList = (params: EventsListParams) =>
  useQuery({
    queryKey: ['events', params],
    queryFn: () => fetchEventsList(params)
  });
