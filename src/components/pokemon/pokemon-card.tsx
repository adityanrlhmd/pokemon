import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { formatPokemonId, getPokemonArtwork } from '@/utils/pokemon';
import { TypeBadge } from './type-badge';

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
}

export const PokemonCard = memo(function PokemonCard({ id, name, types }: PokemonCardProps) {
  const artwork = getPokemonArtwork(id);

  return (
    <Link href={`/pokemon/${id}`}>
      <Card className="group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <CardContent className="flex flex-col items-center gap-3 p-4">
          <div className="relative h-28 w-28">
            <Image
              src={artwork}
              alt={name}
              fill
              sizes="112px"
              className="object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-105"
              priority={id <= 20}
            />
          </div>

          <div className="flex w-full flex-col items-center gap-1.5">
            <span className="text-xs font-medium text-zinc-400">{formatPokemonId(id)}</span>
            <span className="text-sm font-semibold capitalize text-zinc-900 dark:text-zinc-50">
              {name}
            </span>
            <div className="flex flex-wrap justify-center gap-1">
              {types.map((type) => (
                <TypeBadge key={type} type={type} size="sm" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
});
