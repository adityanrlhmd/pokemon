import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PokemonCardSkeleton } from '../pokemon-card-skeleton';

describe('PokemonCardSkeleton', () => {
  it('renders without crashing', () => {
    const { container } = render(<PokemonCardSkeleton />);
    expect(container.firstChild).not.toBeNull();
  });

  it('renders skeleton pulse elements', () => {
    const { container } = render(<PokemonCardSkeleton />);
    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
