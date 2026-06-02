import Image from 'next/image';
import Link from 'next/link';
import type { ChainLink, EvolutionDetail } from '@/services/evolution-chain';
import type { NamedAPIResource } from '@/services/types';
import { extractIdFromUrl, getPokemonArtwork } from '@/utils/pokemon';

interface EvolutionDisplayProps {
  chain: ChainLink;
}

export function EvolutionDisplay({ chain }: EvolutionDisplayProps) {
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
    <Link href={`/pokemon/${id}`} className="group flex flex-col items-center gap-1">
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
      <span className="text-center text-[10px]">
        {trigger ? getEvolutionTriggerText(trigger) : ''}
      </span>
      <span className="text-lg">→</span>
    </div>
  );
}

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
