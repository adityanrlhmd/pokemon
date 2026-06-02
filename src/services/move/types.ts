import type { FlavorText, Name, NamedAPIResource, VerboseEffect } from '../types';

export interface MoveFlavorText extends FlavorText {
  version_group: NamedAPIResource;
}

export interface MoveStatChange {
  change: number;
  stat: NamedAPIResource;
}

export interface Move {
  id: number;
  name: string;
  accuracy: number | null;
  effect_chance: number | null;
  pp: number | null;
  priority: number;
  power: number | null;
  contest_combos: {
    normal: { use_before: NamedAPIResource[] | null; use_after: NamedAPIResource[] | null } | null;
    super: { use_before: NamedAPIResource[] | null; use_after: NamedAPIResource[] | null } | null;
  } | null;
  contest_type: NamedAPIResource | null;
  contest_effect: { url: string } | null;
  damage_class: NamedAPIResource;
  effect_entries: VerboseEffect[];
  flavor_text_entries: MoveFlavorText[];
  generation: NamedAPIResource;
  names: Name[];
  past_values: Array<{
    accuracy: number | null;
    effect_chance: number | null;
    power: number | null;
    pp: number | null;
    effect_entries: VerboseEffect[];
    type: NamedAPIResource | null;
    version_group: NamedAPIResource;
  }>;
  stat_changes: MoveStatChange[];
  target: NamedAPIResource;
  type: NamedAPIResource;
  learned_by_pokemon: NamedAPIResource[];
}

export interface GetMoveParams {
  idOrName: string | number;
}

export interface GetMovesParams {
  limit?: number;
  offset?: number;
}
