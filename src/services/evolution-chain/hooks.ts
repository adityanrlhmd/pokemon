import { useQuery } from '@tanstack/react-query';
import { evolutionChainFetcher } from './fetcher';
import type { GetEvolutionChainParams } from './types';

export const evolutionChainQueryKeys = {
  all: ['evolution-chain'] as const,
  details: () => [...evolutionChainQueryKeys.all, 'detail'] as const,
  detail: (id: number) => [...evolutionChainQueryKeys.details(), id] as const,
};

export function useGetEvolutionChain({ id }: GetEvolutionChainParams) {
  return useQuery({
    queryKey: evolutionChainQueryKeys.detail(id),
    queryFn: () => evolutionChainFetcher.getEvolutionChain({ id }),
    enabled: !!id,
  });
}
