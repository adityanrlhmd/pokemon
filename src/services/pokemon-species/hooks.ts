import { useQuery } from '@tanstack/react-query';
import { pokemonSpeciesFetcher } from './fetcher';
import type { GetPokemonSpeciesParams } from './types';

export const pokemonSpeciesQueryKeys = {
  all: ['pokemon-species'] as const,
  details: () => [...pokemonSpeciesQueryKeys.all, 'detail'] as const,
  detail: (idOrName: string | number) => [...pokemonSpeciesQueryKeys.details(), idOrName] as const,
};

export function useGetPokemonSpecies({ idOrName }: GetPokemonSpeciesParams) {
  return useQuery({
    queryKey: pokemonSpeciesQueryKeys.detail(idOrName),
    queryFn: () => pokemonSpeciesFetcher.getPokemonSpecies({ idOrName }),
    enabled: !!idOrName,
  });
}
