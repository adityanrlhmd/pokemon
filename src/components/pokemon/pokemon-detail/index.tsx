'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useGetEvolutionChain } from '@/services/evolution-chain';
import { useGetPokemonDetail } from '@/services/pokemon';
import { useGetPokemonSpecies } from '@/services/pokemon-species';
import { extractIdFromUrl, getEnglishFlavorText, getEnglishGenus } from '@/utils/pokemon';
import { StatBar } from '../stat-bar';
import { AbilityItem } from './ability-item';
import { EvolutionDisplay } from './evolution';
import { PokemonHero } from './hero';
import { PokemonNavigation } from './navigation';
import { SpritesDisplay } from './sprites';

interface PokemonDetailProps {
  idOrName: string;
}

export function PokemonDetail({ idOrName }: PokemonDetailProps) {
  const { data: pokemon, isLoading } = useGetPokemonDetail({ idOrName });
  const { data: species } = useGetPokemonSpecies({
    idOrName: pokemon?.species.name ?? '',
  });
  const evolutionChainId = species?.evolution_chain.url
    ? extractIdFromUrl(species.evolution_chain.url)
    : 0;
  const { data: evolutionChain } = useGetEvolutionChain({ id: evolutionChainId });

  if (isLoading || !pokemon) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-800" />
      </div>
    );
  }

  const flavorText = species ? getEnglishFlavorText(species.flavor_text_entries) : '';
  const genus = species ? getEnglishGenus(species.genera) : '';

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <PokemonNavigation id={pokemon.id} />
      </div>

      <PokemonHero pokemon={pokemon} genus={genus} />

      {flavorText && (
        <p className="mb-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {flavorText}
        </p>
      )}

      <Section title="Base Stats">
        <div className="flex flex-col gap-3">
          {pokemon.stats.map((s) => (
            <StatBar key={s.stat.name} name={s.stat.name} value={s.base_stat} />
          ))}
        </div>
      </Section>

      <Section title="Abilities">
        <div className="flex flex-col gap-3">
          {pokemon.abilities.map((a) => (
            <AbilityItem key={a.ability.name} name={a.ability.name} isHidden={a.is_hidden} />
          ))}
        </div>
      </Section>

      {evolutionChain && (
        <Section title="Evolution">
          <EvolutionDisplay chain={evolutionChain.chain} />
        </Section>
      )}

      <Section title="Sprites">
        <SpritesDisplay sprites={pokemon.sprites} name={pokemon.name} />
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">{title}</h2>
      {children}
    </div>
  );
}
