import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiError } from '../../core/error';
import { evolutionChainFetcher } from '../fetcher';

vi.mock('../../api', () => ({ pokemonApi: { get: vi.fn() } }));

const { pokemonApi } = await import('../../api');
const mockGet = vi.mocked(pokemonApi.get);

const mockEvolutionChain = {
  id: 1,
  baby_trigger_item: null,
  chain: {
    is_baby: false,
    species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    evolution_details: [],
    evolves_to: [
      {
        is_baby: false,
        species: { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
        evolution_details: [
          {
            min_level: 16,
            trigger: { name: 'level-up', url: '' },
            item: null,
            held_item: null,
            known_move: null,
            known_move_type: null,
            location: null,
            min_happiness: null,
            min_beauty: null,
            min_affection: null,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            turn_upside_down: false,
            gender: null,
            used_move: null,
          },
        ],
        evolves_to: [
          {
            is_baby: false,
            species: { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon-species/3/' },
            evolution_details: [
              {
                min_level: 32,
                trigger: { name: 'level-up', url: '' },
                item: null,
                held_item: null,
                known_move: null,
                known_move_type: null,
                location: null,
                min_happiness: null,
                min_beauty: null,
                min_affection: null,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: '',
                trade_species: null,
                turn_upside_down: false,
                gender: null,
                used_move: null,
              },
            ],
            evolves_to: [],
          },
        ],
      },
    ],
  },
};

describe('EvolutionChainFetcher', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('getEvolutionChain', () => {
    it('fetches evolution chain by id', async () => {
      mockGet.mockResolvedValueOnce(mockEvolutionChain);

      const result = await evolutionChainFetcher.getEvolutionChain({ id: 1 });

      expect(mockGet).toHaveBeenCalledWith('/evolution-chain/1');
      expect(result.id).toBe(1);
    });

    it('returns the base species in chain', async () => {
      mockGet.mockResolvedValueOnce(mockEvolutionChain);

      const result = await evolutionChainFetcher.getEvolutionChain({ id: 1 });

      expect(result.chain.species.name).toBe('bulbasaur');
    });

    it('returns first evolution with correct level', async () => {
      mockGet.mockResolvedValueOnce(mockEvolutionChain);

      const result = await evolutionChainFetcher.getEvolutionChain({ id: 1 });
      const firstEvo = result.chain.evolves_to[0];

      expect(firstEvo.species.name).toBe('ivysaur');
      expect(firstEvo.evolution_details[0].min_level).toBe(16);
    });

    it('returns full 3-stage chain', async () => {
      mockGet.mockResolvedValueOnce(mockEvolutionChain);

      const result = await evolutionChainFetcher.getEvolutionChain({ id: 1 });
      const secondEvo = result.chain.evolves_to[0].evolves_to[0];

      expect(secondEvo.species.name).toBe('venusaur');
      expect(secondEvo.evolution_details[0].min_level).toBe(32);
    });

    it('throws ApiError on failure', async () => {
      mockGet.mockRejectedValueOnce(new ApiError('Not found', { status: 404 }));

      await expect(evolutionChainFetcher.getEvolutionChain({ id: 9999 })).rejects.toBeInstanceOf(
        ApiError
      );
    });
  });
});
