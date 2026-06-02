import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-types';
import { TypeBadge } from './type-badge';

describe('TypeBadge', () => {
  it('renders the type name', () => {
    render(<TypeBadge type="fire" />);
    expect(screen.getByText('fire')).toBeInTheDocument();
  });

  it('applies the correct background color for known type', () => {
    render(<TypeBadge type="water" />);
    const badge = screen.getByText('water');
    expect(badge).toHaveStyle({ backgroundColor: POKEMON_TYPE_COLORS.water });
  });

  it('applies fallback color for unknown type', () => {
    render(<TypeBadge type="unknown-type" />);
    const badge = screen.getByText('unknown-type');
    expect(badge).toHaveStyle({ backgroundColor: '#68A090' });
  });

  it('renders with sm size classes', () => {
    render(<TypeBadge type="grass" size="sm" />);
    const badge = screen.getByText('grass');
    expect(badge.className).toContain('text-xs');
  });

  it('renders with md size by default', () => {
    render(<TypeBadge type="electric" />);
    const badge = screen.getByText('electric');
    expect(badge.className).toContain('text-xs');
  });

  it('renders text in white', () => {
    render(<TypeBadge type="fire" />);
    expect(screen.getByText('fire').className).toContain('text-white');
  });
});
