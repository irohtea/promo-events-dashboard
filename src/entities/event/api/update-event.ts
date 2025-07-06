import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Event, UpdateEventDto } from '../model/types';
import { adaptEventFromApi } from '../lib/adapters';

import { apiInstance } from '@/shared/api/base';

export interface UpdateEventMutationVariables {
  id: number;
  event: UpdateEventDto;
}

const updateEvent = async ({ id, event }: UpdateEventMutationVariables): Promise<Event> => {
  const res = await apiInstance.put(`/events/${id}`, event);
  return adaptEventFromApi(res.data);
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateEvent,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['events', variables.id] });
    }
  });
};
