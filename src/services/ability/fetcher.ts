import { pokemonApi } from '../api';
import type { GetAbilityParams, Ability } from './types';

class AbilityFetcher {
  getAbility({ idOrName }: GetAbilityParams): Promise<Ability> {
    return pokemonApi.get(`/ability/${idOrName}`);
  }
}

export const abilityFetcher = new AbilityFetcher();
