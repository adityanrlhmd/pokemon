'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useGetAbility } from '@/services/ability';
import { useGetEvolutionChain } from '@/services/evolution-chain';
import { useGetPokemonDetail } from '@/services/pokemon';
import { useGetPokemonSpecies } from '@/services/pokemon-species';
import type { ChainLink, EvolutionDetail } from '@/services/evolution-chain';
import type { NamedAPIResource } from '@/services/types';
import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-types';
import {
  extractIdFromUrl,
  formatHeight,
  formatPokemonId,
  formatWeight,
  getEnglishFlavorText,
  getEnglishGenus,
  getPokemonArtwork,
} from '@/utils/pokemon';
import { StatBar } from './stat-bar';
import { TypeBadge } from './type-badge';

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

  const primaryType = pokemon.types[0]?.type.name ?? 'normal';
  const primaryColor = POKEMON_TYPE_COLORS[primaryType] ?? '#A8A878';
  const flavorText = species ? getEnglishFlavorText(species.flavor_text_entries) : '';
  const genus = species ? getEnglishGenus(species.genera) : '';

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      {/* Hero */}
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

      {/* Flavor text */}
      {flavorText && (
        <p className="mb-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {flavorText}
        </p>
      )}

      {/* Stats */}
      <Section title="Base Stats">
        <div className="flex flex-col gap-3">
          {pokemon.stats.map((s) => (
            <StatBar key={s.stat.name} name={s.stat.name} value={s.base_stat} />
          ))}
        </div>
      </Section>

      {/* Abilities */}
      <Section title="Abilities">
        <div className="flex flex-col gap-3">
          {pokemon.abilities.map((a) => (
            <AbilityItem key={a.ability.name} name={a.ability.name} isHidden={a.is_hidden} />
          ))}
        </div>
      </Section>

      {/* Evolution chain */}
      {evolutionChain && (
        <Section title="Evolution">
          <EvolutionDisplay chain={evolutionChain.chain} />
        </Section>
      )}

      {/* Sprites */}
      <Section title="Sprites">
        <SpritesDisplay sprites={pokemon.sprites} name={pokemon.name} />
      </Section>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">{title}</h2>
      {children}
    </div>
  );
}

function AbilityItem({ name, isHidden }: { name: string; isHidden: boolean }) {
  const { data } = useGetAbility({ idOrName: name });
  const shortEffect = data?.effect_entries.find((e) => e.language.name === 'en')?.short_effect;

  return (
    <div className="rounded-xl border border-zinc-100 p-4 dark:border-zinc-800">
      <div className="mb-1.5 flex items-center gap-2">
        <span className="text-sm font-semibold capitalize">{name.replace(/-/g, ' ')}</span>
        {isHidden && (
          <Badge variant="secondary" className="text-xs">
            Hidden
          </Badge>
        )}
      </div>
      {shortEffect && <p className="text-xs leading-relaxed text-zinc-500">{shortEffect}</p>}
    </div>
  );
}

function EvolutionDisplay({ chain }: { chain: ChainLink }) {
  const stages = getEvolutionStages(chain);

  if (stages.length <= 1) {
    return <p className="text-sm text-zinc-400">This Pokémon does not evolve.</p>;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {stages.map((stage, i) => (
        <div key={stage.species.name} className="flex items-center gap-3">
          {i > 0 && <EvolutionArrow trigger={stage.trigger} />}
          <EvolutionStage species={stage.species} />
        </div>
      ))}
    </div>
  );
}

function EvolutionStage({ species }: { species: NamedAPIResource }) {
  const id = extractIdFromUrl(species.url);
  return (
    <Link href={`/pokemon/${id}`} className="flex flex-col items-center gap-1 group">
      <div className="relative h-20 w-20">
        <Image
          src={getPokemonArtwork(id)}
          alt={species.name}
          fill
          sizes="80px"
          className="object-contain transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <span className="text-xs font-medium capitalize text-zinc-700 dark:text-zinc-300">
        {species.name}
      </span>
    </Link>
  );
}

function EvolutionArrow({ trigger }: { trigger?: EvolutionDetail }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-zinc-400">
      <span className="text-[10px] text-center">
        {trigger ? getEvolutionTriggerText(trigger) : ''}
      </span>
      <span className="text-lg">→</span>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getEvolutionStages(chain: ChainLink): Array<{
  species: NamedAPIResource;
  trigger?: EvolutionDetail;
}> {
  const stages: Array<{ species: NamedAPIResource; trigger?: EvolutionDetail }> = [
    { species: chain.species },
  ];
  let current = chain;
  while (current.evolves_to.length > 0) {
    const next = current.evolves_to[0];
    stages.push({ species: next.species, trigger: next.evolution_details[0] });
    current = next;
  }
  return stages;
}

function getEvolutionTriggerText(detail: EvolutionDetail): string {
  if (detail.min_level) return `Lv. ${detail.min_level}`;
  if (detail.item) return detail.item.name.replace(/-/g, ' ');
  if (detail.trigger.name === 'trade') return 'Trade';
  if (detail.min_happiness) return 'Friendship';
  if (detail.min_beauty) return 'Beauty';
  return detail.trigger.name.replace(/-/g, ' ');
}

// ─── Sprites ──────────────────────────────────────────────────────────────────

import type { Pokemon } from '@/services/pokemon';

interface SpritesDisplayProps {
  sprites: Pokemon['sprites'];
  name: string;
}

function SpritesDisplay({ sprites, name }: SpritesDisplayProps) {
  const entries = [
    { label: 'Front', src: sprites.front_default },
    { label: 'Back', src: sprites.back_default },
    { label: 'Front Shiny', src: sprites.front_shiny },
    { label: 'Back Shiny', src: sprites.back_shiny },
  ].filter((e) => e.src);

  if (entries.length === 0) return <p className="text-sm text-zinc-400">No sprites available.</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {entries.map(({ label, src }) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <div className="relative h-24 w-24 rounded-xl bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={src!}
              alt={`${name} ${label}`}
              fill
              sizes="96px"
              className="object-contain p-1 [image-rendering:pixelated]"
              unoptimized
            />
          </div>
          <span className="text-xs text-zinc-500">{label}</span>
        </div>
      ))}
    </div>
  );
}
