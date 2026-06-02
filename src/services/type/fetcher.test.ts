import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiError } from '../core/error';
import { typeFetcher } from './fetcher';

vi.mock('../api', () => ({
  pokemonApi: { get: vi.fn() },
}));

const { pokemonApi } = await import('../api');
const mockGet = vi.mocked(pokemonApi.get);

const mockTypeList = {
  count: 21,
  next: null,
  previous: null,
  results: [
    { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
    { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
    { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
  ],
};

const mockTypeDetail = {
  id: 10,
  name: 'fire',
  damage_relations: {
    double_damage_to: [{ name: 'grass', url: '' }],
    half_damage_to: [{ name: 'water', url: '' }],
    no_damage_to: [],
    double_damage_from: [{ name: 'water', url: '' }],
    half_damage_from: [{ name: 'fire', url: '' }],
    no_damage_from: [],
  },
  pokemon: [
    { slot: 1, pokemon: { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' } },
  ],
  generation: { name: 'generation-i', url: '' },
  names: [],
  moves: [],
  past_damage_relations: [],
  game_indices: [],
  move_damage_class: null,
};

describe('TypeFetcher', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('getTypes', () => {
    it('fetches all types with limit 100', async () => {
      mockGet.mockResolvedValueOnce(mockTypeList);

      const result = await typeFetcher.getTypes();

      expect(mockGet).toHaveBeenCalledWith('/type', { params: { limit: 100 } });
      expect(result.results).toHaveLength(3);
    });

    it('returns count and results', async () => {
      mockGet.mockResolvedValueOnce(mockTypeList);

      const result = await typeFetcher.getTypes();

      expect(result.count).toBe(21);
      expect(result.results[1].name).toBe('fire');
    });
  });

  describe('getTypeDetail', () => {
    it('fetches type by name', async () => {
      mockGet.mockResolvedValueOnce(mockTypeDetail);

      const result = await typeFetcher.getTypeDetail({ idOrName: 'fire' });

      expect(mockGet).toHaveBeenCalledWith('/type/fire');
      expect(result.name).toBe('fire');
      expect(result.pokemon).toHaveLength(1);
    });

    it('fetches type by id', async () => {
      mockGet.mockResolvedValueOnce(mockTypeDetail);

      await typeFetcher.getTypeDetail({ idOrName: 10 });

      expect(mockGet).toHaveBeenCalledWith('/type/10');
    });

    it('includes damage relations', async () => {
      mockGet.mockResolvedValueOnce(mockTypeDetail);

      const result = await typeFetcher.getTypeDetail({ idOrName: 'fire' });

      expect(result.damage_relations.double_damage_to[0].name).toBe('grass');
      expect(result.damage_relations.double_damage_from[0].name).toBe('water');
    });

    it('throws ApiError on failure', async () => {
      mockGet.mockRejectedValueOnce(new ApiError('Not found', { status: 404 }));

      await expect(typeFetcher.getTypeDetail({ idOrName: 'invalid' })).rejects.toBeInstanceOf(
        ApiError
      );
    });
  });
});
