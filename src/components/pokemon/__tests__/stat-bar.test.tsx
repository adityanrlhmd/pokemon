import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StatBar } from '../stat-bar';

describe('StatBar', () => {
  it('renders HP label', () => {
    render(<StatBar name="hp" value={45} />);
    expect(screen.getByText('HP')).toBeInTheDocument();
  });

  it('renders the stat value', () => {
    render(<StatBar name="attack" value={49} />);
    expect(screen.getByText('49')).toBeInTheDocument();
  });

  it('renders correct labels for all stat names', () => {
    const stats = [
      { name: 'hp', label: 'HP' },
      { name: 'attack', label: 'Attack' },
      { name: 'defense', label: 'Defense' },
      { name: 'special-attack', label: 'Sp. Atk' },
      { name: 'special-defense', label: 'Sp. Def' },
      { name: 'speed', label: 'Speed' },
    ];

    stats.forEach(({ name, label }) => {
      const { unmount } = render(<StatBar name={name} value={50} />);
      expect(screen.getByText(label)).toBeInTheDocument();
      unmount();
    });
  });

  it('falls back to raw stat name for unknown stats', () => {
    render(<StatBar name="unknown-stat" value={100} />);
    expect(screen.getByText('unknown-stat')).toBeInTheDocument();
  });

  it('renders progress bar element', () => {
    const { container } = render(<StatBar name="speed" value={90} />);
    const bars = container.querySelectorAll('.rounded-full');
    expect(bars.length).toBeGreaterThan(0);
  });
});
