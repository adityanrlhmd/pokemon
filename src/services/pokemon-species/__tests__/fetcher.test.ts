import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiError } from '../../core/error';
import { pokemonSpeciesFetcher } from '../fetcher';

vi.mock('../../api', () => ({ pokemonApi: { get: vi.fn() } }));

const { pokemonApi } = await import('../../api');
const mockGet = vi.mocked(pokemonApi.get);

const mockSpecies = {
  id: 1,
  name: 'bulbasaur',
  base_happiness: 70,
  capture_rate: 45,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,
  color: { name: 'green', url: '' },
  evolution_chain: { url: 'https://pokeapi.co/api/v2/evolution-chain/1/' },
  evolves_from_species: null,
  flavor_text_entries: [
    {
      flavor_text: 'A strange seed was planted.',
      language: { name: 'en', url: '' },
      version: { name: 'red', url: '' },
    },
  ],
  genera: [{ genus: 'Seed Pokémon', language: { name: 'en', url: '' } }],
};

describe('PokemonSpeciesFetcher', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('getPokemonSpecies', () => {
    it('fetches species by id', async () => {
      mockGet.mockResolvedValueOnce(mockSpecies);

      const result = await pokemonSpeciesFetcher.getPokemonSpecies({ idOrName: 1 });

      expect(mockGet).toHaveBeenCalledWith('/pokemon-species/1');
      expect(result.name).toBe('bulbasaur');
    });

    it('fetches species by name', async () => {
      mockGet.mockResolvedValueOnce(mockSpecies);

      await pokemonSpeciesFetcher.getPokemonSpecies({ idOrName: 'bulbasaur' });

      expect(mockGet).toHaveBeenCalledWith('/pokemon-species/bulbasaur');
    });

    it('returns evolution chain url', async () => {
      mockGet.mockResolvedValueOnce(mockSpecies);

      const result = await pokemonSpeciesFetcher.getPokemonSpecies({ idOrName: 1 });

      expect(result.evolution_chain.url).toContain('evolution-chain/1');
    });

    it('returns english flavor text entries', async () => {
      mockGet.mockResolvedValueOnce(mockSpecies);

      const result = await pokemonSpeciesFetcher.getPokemonSpecies({ idOrName: 1 });
      const enEntry = result.flavor_text_entries.find((e) => e.language.name === 'en');

      expect(enEntry?.flavor_text).toBe('A strange seed was planted.');
    });

    it('throws ApiError on failure', async () => {
      mockGet.mockRejectedValueOnce(new ApiError('Not found', { status: 404 }));

      await expect(
        pokemonSpeciesFetcher.getPokemonSpecies({ idOrName: 'invalid' })
      ).rejects.toBeInstanceOf(ApiError);
    });
  });
});
