import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PokemonListItem } from '../pokemon-list-item';

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock('@/services/pokemon', () => ({
  useGetPokemonDetail: vi.fn(),
}));

const { useGetPokemonDetail } = await import('@/services/pokemon');
const mockUseGetPokemonDetail = vi.mocked(useGetPokemonDetail);

const mockPokemon = {
  id: 25,
  name: 'pikachu',
  types: [{ slot: 1, type: { name: 'electric', url: '' } }],
  sprites: { other: { 'official-artwork': { front_default: null, front_shiny: null } } },
};

describe('PokemonListItem', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders skeleton when loading', () => {
    mockUseGetPokemonDetail.mockReturnValue({ data: undefined, isLoading: true } as never);

    const { container } = render(
      <PokemonListItem name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />
    );

    expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
    expect(screen.queryByText('pikachu')).not.toBeInTheDocument();
  });

  it('renders pokemon card when data is loaded', () => {
    mockUseGetPokemonDetail.mockReturnValue({ data: mockPokemon, isLoading: false } as never);

    render(<PokemonListItem name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />);

    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('#0025')).toBeInTheDocument();
  });

  it('extracts correct id from url', () => {
    mockUseGetPokemonDetail.mockReturnValue({ data: undefined, isLoading: false } as never);

    render(<PokemonListItem name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />);

    expect(mockUseGetPokemonDetail).toHaveBeenCalledWith({ idOrName: 25 });
  });

  it('renders type badge when data is loaded', () => {
    mockUseGetPokemonDetail.mockReturnValue({ data: mockPokemon, isLoading: false } as never);

    render(<PokemonListItem name="pikachu" url="https://pokeapi.co/api/v2/pokemon/25/" />);

    expect(screen.getByText('electric')).toBeInTheDocument();
  });
});
