import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PokemonNavigation } from '../navigation';

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('PokemonNavigation', () => {
  it('renders prev and next links', () => {
    render(<PokemonNavigation id={500} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('shows correct prev and next ids for a mid-range pokemon', () => {
    render(<PokemonNavigation id={500} />);
    expect(screen.getByText('#0499')).toBeInTheDocument();
    expect(screen.getByText('#0501')).toBeInTheDocument();
  });

  it('wraps to #1025 when current id is 1', () => {
    render(<PokemonNavigation id={1} />);
    expect(screen.getByText('#1025')).toBeInTheDocument();
  });

  it('wraps to #0001 when current id is 1025', () => {
    render(<PokemonNavigation id={1025} />);
    expect(screen.getByText('#0001')).toBeInTheDocument();
  });

  it('links point to correct pokemon routes', () => {
    render(<PokemonNavigation id={10} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/pokemon/9');
    expect(links[1]).toHaveAttribute('href', '/pokemon/11');
  });
});
