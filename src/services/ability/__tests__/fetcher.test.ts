import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiError } from '../../core/error';
import { abilityFetcher } from '../fetcher';

vi.mock('../../api', () => ({ pokemonApi: { get: vi.fn() } }));

const { pokemonApi } = await import('../../api');
const mockGet = vi.mocked(pokemonApi.get);

const mockAbility = {
  id: 65,
  name: 'overgrow',
  is_main_series: true,
  generation: { name: 'generation-i', url: '' },
  names: [],
  effect_entries: [
    {
      effect:
        'When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.',
      short_effect: 'Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.',
      language: { name: 'en', url: '' },
    },
  ],
  effect_changes: [],
  flavor_text_entries: [
    {
      flavor_text: 'Powers up Grass-type moves in a pinch.',
      language: { name: 'en', url: '' },
      version_group: { name: 'x-y', url: '' },
    },
  ],
  pokemon: [{ is_hidden: false, slot: 1, pokemon: { name: 'bulbasaur', url: '' } }],
};

describe('AbilityFetcher', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('getAbility', () => {
    it('fetches ability by name', async () => {
      mockGet.mockResolvedValueOnce(mockAbility);

      const result = await abilityFetcher.getAbility({ idOrName: 'overgrow' });

      expect(mockGet).toHaveBeenCalledWith('/ability/overgrow');
      expect(result.name).toBe('overgrow');
    });

    it('fetches ability by id', async () => {
      mockGet.mockResolvedValueOnce(mockAbility);

      await abilityFetcher.getAbility({ idOrName: 65 });

      expect(mockGet).toHaveBeenCalledWith('/ability/65');
    });

    it('returns english effect entries', async () => {
      mockGet.mockResolvedValueOnce(mockAbility);

      const result = await abilityFetcher.getAbility({ idOrName: 'overgrow' });
      const enEffect = result.effect_entries.find((e) => e.language.name === 'en');

      expect(enEffect?.short_effect).toContain('grass');
    });

    it('returns is_main_series flag', async () => {
      mockGet.mockResolvedValueOnce(mockAbility);

      const result = await abilityFetcher.getAbility({ idOrName: 'overgrow' });

      expect(result.is_main_series).toBe(true);
    });

    it('throws ApiError on failure', async () => {
      mockGet.mockRejectedValueOnce(new ApiError('Not found', { status: 404 }));

      await expect(abilityFetcher.getAbility({ idOrName: 'invalid' })).rejects.toBeInstanceOf(
        ApiError
      );
    });
  });
});
