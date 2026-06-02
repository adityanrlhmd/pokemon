import { PokemonCardSkeleton } from '../pokemon-card-skeleton';
import { GRID_CLASSES } from './constants';

export function GridSkeleton() {
  return (
    <div className={GRID_CLASSES}>
      {Array.from({ length: 20 }).map((_, i) => (
        <PokemonCardSkeleton key={i} />
      ))}
    </div>
  );
}
