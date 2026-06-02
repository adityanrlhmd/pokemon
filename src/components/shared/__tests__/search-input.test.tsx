import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SearchInput } from '../search-input';

vi.mock('nuqs', () => ({ useQueryState: vi.fn() }));

const { useQueryState } = await import('nuqs');
const mockUseQueryState = vi.mocked(useQueryState);
const mockSetSearch = vi.fn();

describe('SearchInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseQueryState.mockReturnValue(['', mockSetSearch] as never);
  });

  it('renders the search input', () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText('Search Pokémon...')).toBeInTheDocument();
  });

  it('does not show clear button when search is empty', () => {
    render(<SearchInput />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('shows clear button when search has value', () => {
    mockUseQueryState.mockReturnValue(['pikachu', mockSetSearch] as never);

    render(<SearchInput />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls setSearch with null when clear is clicked', async () => {
    mockUseQueryState.mockReturnValue(['pikachu', mockSetSearch] as never);

    render(<SearchInput />);
    await userEvent.click(screen.getByRole('button'));

    expect(mockSetSearch).toHaveBeenCalledWith(null);
  });

  it('calls setSearch when typing', async () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText('Search Pokémon...');

    await userEvent.type(input, 'b');

    expect(mockSetSearch).toHaveBeenCalled();
  });
});
