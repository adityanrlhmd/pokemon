import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { POKEMON_LIST_LIMIT } from '@/constants/api';
import { pokemonFetcher } from './fetcher';
import type { GetPokemonDetailParams } from './types';

export const pokemonQueryKeys = {
  all: ['pokemon'] as const,
  lists: () => [...pokemonQueryKeys.all, 'list'] as const,
  infiniteList: () => [...pokemonQueryKeys.lists(), 'infinite'] as const,
  details: () => [...pokemonQueryKeys.all, 'detail'] as const,
  detail: (idOrName: string | number) => [...pokemonQueryKeys.details(), idOrName] as const,
};

export function useGetInfinitePokemons() {
  return useInfiniteQuery({
    queryKey: pokemonQueryKeys.infiniteList(),
    queryFn: ({ pageParam }) =>
      pokemonFetcher.getPokemons({ limit: POKEMON_LIST_LIMIT, offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (!lastPage.next) return undefined;
      return lastPageParam + POKEMON_LIST_LIMIT;
    },
  });
}

export function useGetPokemonDetail({ idOrName }: GetPokemonDetailParams) {
  return useQuery({
    queryKey: pokemonQueryKeys.detail(idOrName),
    queryFn: () => pokemonFetcher.getPokemonDetail({ idOrName }),
    enabled: !!idOrName,
  });
}
