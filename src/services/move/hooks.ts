import { useQuery } from '@tanstack/react-query';
import { moveFetcher } from './fetcher';
import type { GetMoveParams } from './types';

export const moveQueryKeys = {
  all: ['move'] as const,
  details: () => [...moveQueryKeys.all, 'detail'] as const,
  detail: (idOrName: string | number) => [...moveQueryKeys.details(), idOrName] as const,
};

export function useGetMove({ idOrName }: GetMoveParams) {
  return useQuery({
    queryKey: moveQueryKeys.detail(idOrName),
    queryFn: () => moveFetcher.getMove({ idOrName }),
    enabled: !!idOrName,
  });
}
