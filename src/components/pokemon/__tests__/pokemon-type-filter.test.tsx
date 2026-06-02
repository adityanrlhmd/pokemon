import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PokemonTypeFilter } from '../pokemon-type-filter';

vi.mock('nuqs', () => ({ useQueryState: vi.fn() }));
vi.mock('@/services/type', () => ({ useGetTypes: vi.fn() }));

const { useQueryState } = await import('nuqs');
const { useGetTypes } = await import('@/services/type');

const mockSetType = vi.fn();
const mockTypes = {
  count: 3,
  next: null,
  previous: null,
  results: [
    { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
    { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
    { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
  ],
};

describe('PokemonTypeFilter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useQueryState).mockReturnValue(['', mockSetType] as never);
    vi.mocked(useGetTypes).mockReturnValue({ data: mockTypes } as never);
  });

  it('renders all type buttons', () => {
    render(<PokemonTypeFilter />);
    expect(screen.getByText('fire')).toBeInTheDocument();
    expect(screen.getByText('water')).toBeInTheDocument();
    expect(screen.getByText('grass')).toBeInTheDocument();
  });

  it('calls setType with type name when a button is clicked', () => {
    render(<PokemonTypeFilter />);
    fireEvent.click(screen.getByText('fire'));
    expect(mockSetType).toHaveBeenCalledWith('fire');
  });

  it('calls setType with null when selected type is clicked again', () => {
    vi.mocked(useQueryState).mockReturnValue(['fire', mockSetType] as never);
    render(<PokemonTypeFilter />);
    fireEvent.click(screen.getByText('fire'));
    expect(mockSetType).toHaveBeenCalledWith(null);
  });

  it('renders nothing when types data is not loaded', () => {
    vi.mocked(useGetTypes).mockReturnValue({ data: undefined } as never);
    const { container } = render(<PokemonTypeFilter />);
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(0);
  });
});
