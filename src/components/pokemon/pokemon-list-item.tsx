'use client';

import { useGetPokemonDetail } from '@/services/pokemon';
import { extractIdFromUrl } from '@/utils/pokemon';
import { PokemonCard } from './pokemon-card';
import { PokemonCardSkeleton } from './pokemon-card-skeleton';

interface PokemonListItemProps {
  name: string;
  url: string;
}

export function PokemonListItem({ url }: PokemonListItemProps) {
  const id = extractIdFromUrl(url);
  const { data, isLoading } = useGetPokemonDetail({ idOrName: id });

  if (isLoading || !data) return <PokemonCardSkeleton />;

  return <PokemonCard id={data.id} name={data.name} types={data.types.map((t) => t.type.name)} />;
}
