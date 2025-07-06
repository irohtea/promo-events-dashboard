import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CreateEventDto } from '../model/types';
import { adaptEventFromApi } from '../lib/adapters';

import { apiInstance } from '@/shared/api/base';

const createEvent = async (event: CreateEventDto) => {
  const res = await apiInstance.post('/events', event);
  return adaptEventFromApi(res.data);
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEvent,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['events'] })
  });
};
