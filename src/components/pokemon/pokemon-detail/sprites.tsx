import Image from 'next/image';
import type { Pokemon } from '@/services/pokemon';

interface SpritesDisplayProps {
  sprites: Pokemon['sprites'];
  name: string;
}

export function SpritesDisplay({ sprites, name }: SpritesDisplayProps) {
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
