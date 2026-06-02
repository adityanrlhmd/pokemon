import { useQuery } from '@tanstack/react-query';
import { typeFetcher } from './fetcher';
import type { GetTypeDetailParams } from './types';

export const typeQueryKeys = {
  all: ['type'] as const,
  lists: () => [...typeQueryKeys.all, 'list'] as const,
  details: () => [...typeQueryKeys.all, 'detail'] as const,
  detail: (idOrName: string | number) => [...typeQueryKeys.details(), idOrName] as const,
};

export function useGetTypes() {
  return useQuery({
    queryKey: typeQueryKeys.lists(),
    queryFn: () => typeFetcher.getTypes(),
    staleTime: Infinity,
  });
}

export function useGetTypeDetail({ idOrName }: GetTypeDetailParams) {
  return useQuery({
    queryKey: typeQueryKeys.detail(idOrName),
    queryFn: () => typeFetcher.getTypeDetail({ idOrName }),
    enabled: !!idOrName,
  });
}
