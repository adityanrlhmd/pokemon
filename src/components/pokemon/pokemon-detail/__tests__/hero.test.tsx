import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PokemonHero } from '../hero';

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

const mockPokemon = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  base_experience: 112,
  types: [{ slot: 1, type: { name: 'electric', url: '' } }],
  stats: [],
  abilities: [],
  forms: [],
  held_items: [],
  moves: [],
  sprites: {
    front_default: null,
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null,
    other: {
      'official-artwork': { front_default: null, front_shiny: null },
      home: {
        front_default: null,
        front_female: null,
        front_shiny: null,
        front_shiny_female: null,
      },
      dream_world: { front_default: null, front_female: null },
    },
  },
  species: { name: 'pikachu', url: '' },
  is_default: true,
  order: 35,
  cries: { latest: '', legacy: '' },
};

describe('PokemonHero', () => {
  it('renders pokemon name', () => {
    render(<PokemonHero pokemon={mockPokemon as never} genus="Mouse Pokémon" />);
    expect(screen.getByText('pikachu')).toBeInTheDocument();
  });

  it('renders formatted pokemon id', () => {
    render(<PokemonHero pokemon={mockPokemon as never} genus="" />);
    expect(screen.getByText('#0025')).toBeInTheDocument();
  });

  it('renders height and weight', () => {
    render(<PokemonHero pokemon={mockPokemon as never} genus="" />);
    expect(screen.getByText('0.4 m')).toBeInTheDocument();
    expect(screen.getByText('6.0 kg')).toBeInTheDocument();
  });

  it('renders genus when provided', () => {
    render(<PokemonHero pokemon={mockPokemon as never} genus="Mouse Pokémon" />);
    expect(screen.getByText('Mouse Pokémon')).toBeInTheDocument();
  });

  it('does not render genus when empty', () => {
    render(<PokemonHero pokemon={mockPokemon as never} genus="" />);
    expect(screen.queryByText('Mouse Pokémon')).not.toBeInTheDocument();
  });

  it('renders type badge', () => {
    render(<PokemonHero pokemon={mockPokemon as never} genus="" />);
    expect(screen.getByText('electric')).toBeInTheDocument();
  });

  it('renders artwork image', () => {
    render(<PokemonHero pokemon={mockPokemon as never} genus="" />);
    const img = screen.getByAltText('pikachu');
    expect(img).toHaveAttribute('src', expect.stringContaining('25.png'));
  });
});
