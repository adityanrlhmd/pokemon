import Image from 'next/image';
import type { Pokemon } from '@/services/pokemon';
import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-types';
import { formatHeight, formatPokemonId, formatWeight, getPokemonArtwork } from '@/utils/pokemon';
import { TypeBadge } from '../type-badge';

interface PokemonHeroProps {
  pokemon: Pokemon;
  genus: string;
}

export function PokemonHero({ pokemon, genus }: PokemonHeroProps) {
  const primaryType = pokemon.types[0]?.type.name ?? 'normal';
  const primaryColor = POKEMON_TYPE_COLORS[primaryType] ?? '#A8A878';

  return (
    <div
      className="mb-6 flex flex-col items-center gap-6 rounded-2xl p-8 sm:flex-row"
      style={{ backgroundColor: `${primaryColor}20` }}
    >
      <div className="relative h-48 w-48 shrink-0">
        <Image
          src={getPokemonArtwork(pokemon.id)}
          alt={pokemon.name}
          fill
          sizes="192px"
          className="object-contain drop-shadow-xl"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-3 sm:items-start">
        <span className="text-sm font-medium text-zinc-500">{formatPokemonId(pokemon.id)}</span>
        <h1 className="text-3xl font-bold capitalize text-zinc-900 dark:text-zinc-50">
          {pokemon.name}
        </h1>
        {genus && <p className="text-sm text-zinc-500">{genus}</p>}
        <div className="flex gap-2">
          {pokemon.types.map((t) => (
            <TypeBadge key={t.type.name} type={t.type.name} />
          ))}
        </div>
        <div className="flex gap-6 text-center">
          <div>
            <p className="text-xs text-zinc-400">Height</p>
            <p className="text-sm font-semibold">{formatHeight(pokemon.height)}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-400">Weight</p>
            <p className="text-sm font-semibold">{formatWeight(pokemon.weight)}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-400">Base Exp</p>
            <p className="text-sm font-semibold">{pokemon.base_experience ?? '—'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
