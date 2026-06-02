import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AbilityItem } from '../ability-item';

vi.mock('@/services/ability', () => ({ useGetAbility: vi.fn() }));

const { useGetAbility } = await import('@/services/ability');
const mockUseGetAbility = vi.mocked(useGetAbility);

const mockAbility = {
  effect_entries: [
    {
      short_effect: 'Strengthens grass moves to inflict 1.5× damage.',
      language: { name: 'en', url: '' },
      effect: '',
    },
  ],
};

describe('AbilityItem', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renders the ability name', () => {
    mockUseGetAbility.mockReturnValue({ data: undefined } as never);
    render(<AbilityItem name="overgrow" isHidden={false} />);
    expect(screen.getByText('overgrow')).toBeInTheDocument();
  });

  it('formats hyphenated ability names with spaces', () => {
    mockUseGetAbility.mockReturnValue({ data: undefined } as never);
    render(<AbilityItem name="speed-boost" isHidden={false} />);
    expect(screen.getByText('speed boost')).toBeInTheDocument();
  });

  it('shows Hidden badge when ability is hidden', () => {
    mockUseGetAbility.mockReturnValue({ data: undefined } as never);
    render(<AbilityItem name="chlorophyll" isHidden={true} />);
    expect(screen.getByText('Hidden')).toBeInTheDocument();
  });

  it('does not show Hidden badge for regular abilities', () => {
    mockUseGetAbility.mockReturnValue({ data: undefined } as never);
    render(<AbilityItem name="overgrow" isHidden={false} />);
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });

  it('shows short effect when ability data is loaded', () => {
    mockUseGetAbility.mockReturnValue({ data: mockAbility } as never);
    render(<AbilityItem name="overgrow" isHidden={false} />);
    expect(screen.getByText('Strengthens grass moves to inflict 1.5× damage.')).toBeInTheDocument();
  });

  it('does not show effect text when data is not loaded', () => {
    mockUseGetAbility.mockReturnValue({ data: undefined } as never);
    render(<AbilityItem name="overgrow" isHidden={false} />);
    expect(screen.queryByText(/strengthens/i)).not.toBeInTheDocument();
  });
});
