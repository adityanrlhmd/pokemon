import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GridSkeleton } from '../grid-skeleton';

describe('GridSkeleton', () => {
  it('renders 20 skeleton cards', () => {
    const { container } = render(<GridSkeleton />);
    // Each PokemonCardSkeleton renders 4 .animate-pulse elements
    const skeletons = container.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBe(80);
  });

  it('renders grid container', () => {
    const { container } = render(<GridSkeleton />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('grid');
  });
});
