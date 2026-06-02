import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Header } from '../header';

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Header', () => {
  it('renders the Pokédex title', () => {
    render(<Header />);
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
  });

  it('has a link to the home page', () => {
    render(<Header />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders as a sticky header', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header?.className).toContain('sticky');
  });
});
