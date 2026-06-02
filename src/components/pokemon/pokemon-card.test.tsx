import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PokemonCard } from './pokemon-card';

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

const defaultProps = {
  id: 25,
  name: 'pikachu',
  types: ['electric'],
};

describe('PokemonCard', () => {
  it('renders pokemon name', () => {
    render(<PokemonCard {...defaultProps} />);
    expect(screen.getByText('pikachu')).toBeInTheDocument();
  });

  it('renders formatted pokemon id', () => {
    render(<PokemonCard {...defaultProps} />);
    expect(screen.getByText('#0025')).toBeInTheDocument();
  });

  it('renders all type badges', () => {
    render(<PokemonCard id={1} name="bulbasaur" types={['grass', 'poison']} />);
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });

  it('links to the correct detail page', () => {
    render(<PokemonCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/pokemon/25');
  });

  it('renders the official artwork image', () => {
    render(<PokemonCard {...defaultProps} />);
    const img = screen.getByAltText('pikachu');
    expect(img).toHaveAttribute('src', expect.stringContaining('25.png'));
  });

  it('renders single type pokemon correctly', () => {
    render(<PokemonCard id={132} name="ditto" types={['normal']} />);
    expect(screen.getByText('normal')).toBeInTheDocument();
    expect(screen.queryByText('grass')).not.toBeInTheDocument();
  });
});
