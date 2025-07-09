import { useQuery } from '@tanstack/react-query';

import { Event } from '../model/types';
import { adaptEventFromApi } from '../lib/adapters';

import { apiInstance } from '@/shared/api/base';

const fetchEventById = async (id: string): Promise<Event> => {
  const res = await apiInstance.get(`/events/${id}`);
  return adaptEventFromApi(res.data);
};

export const useEvent = (id: string) =>
  useQuery({ queryKey: ['events', id], queryFn: () => fetchEventById(id), enabled: !!id });
