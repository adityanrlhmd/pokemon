export function formatPokemonId(id: number): string {
  return `#${String(id).padStart(4, '0')}`;
}

export function formatHeight(height: number): string {
  return `${(height / 10).toFixed(1)} m`;
}

export function formatWeight(weight: number): string {
  return `${(weight / 10).toFixed(1)} kg`;
}

export function getPokemonArtwork(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function getEnglishFlavorText(
  entries: Array<{ flavor_text: string; language: { name: string } }>
): string {
  const entry = entries.findLast((e) => e.language.name === 'en');
  return entry?.flavor_text.replace(/[\n\f]/g, ' ') ?? '';
}

export function getEnglishGenus(
  genera: Array<{ genus: string; language: { name: string } }>
): string {
  return genera.find((g) => g.language.name === 'en')?.genus ?? '';
}

export function extractIdFromUrl(url: string): number {
  const parts = url.split('/').filter(Boolean);
  return Number(parts[parts.length - 1]);
}
