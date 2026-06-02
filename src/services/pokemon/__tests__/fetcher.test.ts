import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiError } from '../../core/error';
import { pokemonFetcher } from '../fetcher';

vi.mock('../../api', () => ({
  pokemonApi: { get: vi.fn() },
}));

const { pokemonApi } = await import('../../api');
const mockGet = vi.mocked(pokemonApi.get);

const mockPokemonList = {
  count: 1350,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: null,
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ],
};

const mockPokemon = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  base_experience: 64,
  types: [{ slot: 1, type: { name: 'grass', url: '' } }],
  stats: [{ base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } }],
  abilities: [{ ability: { name: 'overgrow', url: '' }, is_hidden: false, slot: 1 }],
  sprites: { other: { 'official-artwork': { front_default: null, front_shiny: null } } },
  species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
};

describe('PokemonFetcher', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('getPokemons', () => {
    it('returns paginated list with default params', async () => {
      mockGet.mockResolvedValueOnce(mockPokemonList);

      const result = await pokemonFetcher.getPokemons();

      expect(mockGet).toHaveBeenCalledWith('/pokemon', { params: {} });
      expect(result.count).toBe(1350);
      expect(result.results).toHaveLength(2);
      expect(result.results[0].name).toBe('bulbasaur');
    });

    it('passes limit and offset params', async () => {
      mockGet.mockResolvedValueOnce(mockPokemonList);

      await pokemonFetcher.getPokemons({ limit: 20, offset: 40 });

      expect(mockGet).toHaveBeenCalledWith('/pokemon', { params: { limit: 20, offset: 40 } });
    });

    it('throws ApiError on failure', async () => {
      mockGet.mockRejectedValueOnce(new ApiError('Not found', { status: 404 }));

      await expect(pokemonFetcher.getPokemons()).rejects.toBeInstanceOf(ApiError);
    });
  });

  describe('getPokemonDetail', () => {
    it('fetches pokemon by id', async () => {
      mockGet.mockResolvedValueOnce(mockPokemon);

      const result = await pokemonFetcher.getPokemonDetail({ idOrName: 1 });

      expect(mockGet).toHaveBeenCalledWith('/pokemon/1');
      expect(result.id).toBe(1);
      expect(result.name).toBe('bulbasaur');
    });

    it('fetches pokemon by name', async () => {
      mockGet.mockResolvedValueOnce(mockPokemon);

      const result = await pokemonFetcher.getPokemonDetail({ idOrName: 'bulbasaur' });

      expect(mockGet).toHaveBeenCalledWith('/pokemon/bulbasaur');
      expect(result.name).toBe('bulbasaur');
    });

    it('throws ApiError when pokemon does not exist', async () => {
      mockGet.mockRejectedValueOnce(new ApiError('Not found', { status: 404 }));

      await expect(
        pokemonFetcher.getPokemonDetail({ idOrName: 'unknown-pokemon' })
      ).rejects.toBeInstanceOf(ApiError);
    });
  });
});
