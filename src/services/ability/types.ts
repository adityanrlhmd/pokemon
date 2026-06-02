import type { FlavorText, Name, NamedAPIResource, VerboseEffect } from '../types';

export interface AbilityFlavorText extends FlavorText {
  version_group: NamedAPIResource;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: Name[];
  effect_entries: VerboseEffect[];
  effect_changes: Array<{
    version_group: NamedAPIResource;
    effect_entries: Array<{ effect: string; language: NamedAPIResource }>;
  }>;
  flavor_text_entries: AbilityFlavorText[];
  pokemon: AbilityPokemon[];
}

export interface GetAbilityParams {
  idOrName: string | number;
}
