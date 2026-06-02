import { InfiniteGrid } from './infinite-grid';
import { TypeGrid } from './type-grid';

interface PokemonGridProps {
  type: string;
}

export function PokemonGrid({ type }: PokemonGridProps) {
  if (type) return <TypeGrid key={type} type={type} />;
  return <InfiniteGrid />;
}
