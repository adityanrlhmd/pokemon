import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EvolutionDisplay } from '../evolution';

vi.mock('next/image', () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

const noEvolutionChain = {
  is_baby: false,
  species: { name: 'ditto', url: 'https://pokeapi.co/api/v2/pokemon-species/132/' },
  evolution_details: [],
  evolves_to: [],
};

const threeStageChain = {
  is_baby: false,
  species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
  evolution_details: [],
  evolves_to: [
    {
      is_baby: false,
      species: { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
      evolution_details: [
        {
          min_level: 16,
          trigger: { name: 'level-up', url: '' },
          item: null,
          held_item: null,
          known_move: null,
          known_move_type: null,
          location: null,
          min_happiness: null,
          min_beauty: null,
          min_affection: null,
          needs_overworld_rain: false,
          party_species: null,
          party_type: null,
          relative_physical_stats: null,
          time_of_day: '',
          trade_species: null,
          turn_upside_down: false,
          gender: null,
          used_move: null,
        },
      ],
      evolves_to: [
        {
          is_baby: false,
          species: { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon-species/3/' },
          evolution_details: [
            {
              min_level: 32,
              trigger: { name: 'level-up', url: '' },
              item: null,
              held_item: null,
              known_move: null,
              known_move_type: null,
              location: null,
              min_happiness: null,
              min_beauty: null,
              min_affection: null,
              needs_overworld_rain: false,
              party_species: null,
              party_type: null,
              relative_physical_stats: null,
              time_of_day: '',
              trade_species: null,
              turn_upside_down: false,
              gender: null,
              used_move: null,
            },
          ],
          evolves_to: [],
        },
      ],
    },
  ],
};

describe('EvolutionDisplay', () => {
  it('shows no evolution message for single-stage pokemon', () => {
    render(<EvolutionDisplay chain={noEvolutionChain as never} />);
    expect(screen.getByText('This Pokémon does not evolve.')).toBeInTheDocument();
  });

  it('renders all species names in a 3-stage chain', () => {
    render(<EvolutionDisplay chain={threeStageChain as never} />);
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('ivysaur')).toBeInTheDocument();
    expect(screen.getByText('venusaur')).toBeInTheDocument();
  });

  it('shows level-up trigger text', () => {
    render(<EvolutionDisplay chain={threeStageChain as never} />);
    expect(screen.getByText('Lv. 16')).toBeInTheDocument();
    expect(screen.getByText('Lv. 32')).toBeInTheDocument();
  });

  it('links each evolution stage to its detail page', () => {
    render(<EvolutionDisplay chain={threeStageChain as never} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/pokemon/1');
    expect(links[1]).toHaveAttribute('href', '/pokemon/2');
    expect(links[2]).toHaveAttribute('href', '/pokemon/3');
  });
});
