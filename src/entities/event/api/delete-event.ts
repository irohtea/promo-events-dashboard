import { useMutation, useQueryClient } from '@tanstack/react-query';

import { apiInstance } from '@/shared/api/base';

const deleteEvent = async (id: string) => {
  await apiInstance.delete(`/events/${id}`);
  return id;
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEvent,
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['events', id] });
    }
  });
};
