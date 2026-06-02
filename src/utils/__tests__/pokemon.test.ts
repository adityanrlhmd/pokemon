import { describe, expect, it } from 'vitest';
import {
  extractIdFromUrl,
  formatHeight,
  formatPokemonId,
  formatWeight,
  getEnglishFlavorText,
  getEnglishGenus,
  getPokemonArtwork,
} from '../pokemon';

describe('formatPokemonId', () => {
  it('pads single digit with zeros', () => {
    expect(formatPokemonId(1)).toBe('#0001');
  });

  it('pads triple digit correctly', () => {
    expect(formatPokemonId(151)).toBe('#0151');
  });

  it('does not pad four digit numbers', () => {
    expect(formatPokemonId(1000)).toBe('#1000');
  });
});

describe('formatHeight', () => {
  it('converts decimeters to meters', () => {
    expect(formatHeight(7)).toBe('0.7 m');
  });

  it('handles whole meters', () => {
    expect(formatHeight(20)).toBe('2.0 m');
  });
});

describe('formatWeight', () => {
  it('converts hectograms to kg', () => {
    expect(formatWeight(69)).toBe('6.9 kg');
  });

  it('handles heavy pokemon', () => {
    expect(formatWeight(10000)).toBe('1000.0 kg');
  });
});

describe('getPokemonArtwork', () => {
  it('returns correct official artwork URL', () => {
    const url = getPokemonArtwork(1);
    expect(url).toContain('official-artwork/1.png');
    expect(url).toContain('raw.githubusercontent.com');
  });
});

describe('extractIdFromUrl', () => {
  it('extracts id from PokeAPI URL', () => {
    expect(extractIdFromUrl('https://pokeapi.co/api/v2/pokemon/25/')).toBe(25);
  });

  it('works for species URL', () => {
    expect(extractIdFromUrl('https://pokeapi.co/api/v2/pokemon-species/1/')).toBe(1);
  });

  it('works for evolution chain URL', () => {
    expect(extractIdFromUrl('https://pokeapi.co/api/v2/evolution-chain/3/')).toBe(3);
  });
});

describe('getEnglishFlavorText', () => {
  const entries = [
    { flavor_text: 'Japanese text', language: { name: 'ja' } },
    { flavor_text: 'A strange seed\nwas planted.', language: { name: 'en' } },
    { flavor_text: 'Updated English text.', language: { name: 'en' } },
  ];

  it('returns the last English flavor text', () => {
    expect(getEnglishFlavorText(entries)).toBe('Updated English text.');
  });

  it('replaces newlines and form feeds with spaces', () => {
    const result = getEnglishFlavorText([
      { flavor_text: 'Line one\nLine two\fLine three', language: { name: 'en' } },
    ]);
    expect(result).toBe('Line one Line two Line three');
  });

  it('returns empty string when no English entry exists', () => {
    expect(getEnglishFlavorText([{ flavor_text: 'Texto', language: { name: 'es' } }])).toBe('');
  });
});

describe('getEnglishGenus', () => {
  const genera = [
    { genus: 'たねポケモン', language: { name: 'ja' } },
    { genus: 'Seed Pokémon', language: { name: 'en' } },
  ];

  it('returns English genus', () => {
    expect(getEnglishGenus(genera)).toBe('Seed Pokémon');
  });

  it('returns empty string when no English genus', () => {
    expect(getEnglishGenus([{ genus: 'Plante', language: { name: 'fr' } }])).toBe('');
  });
});
