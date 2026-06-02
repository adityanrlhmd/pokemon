import { useQuery } from '@tanstack/react-query';
import { generationFetcher } from './fetcher';
import type { GetGenerationParams } from './types';

export const generationQueryKeys = {
  all: ['generation'] as const,
  lists: () => [...generationQueryKeys.all, 'list'] as const,
  details: () => [...generationQueryKeys.all, 'detail'] as const,
  detail: (idOrName: string | number) => [...generationQueryKeys.details(), idOrName] as const,
};

export function useGetGenerations() {
  return useQuery({
    queryKey: generationQueryKeys.lists(),
    queryFn: () => generationFetcher.getGenerations(),
    staleTime: Infinity,
  });
}

export function useGetGeneration({ idOrName }: GetGenerationParams) {
  return useQuery({
    queryKey: generationQueryKeys.detail(idOrName),
    queryFn: () => generationFetcher.getGeneration({ idOrName }),
    enabled: !!idOrName,
  });
}
