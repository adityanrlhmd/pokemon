import type { Name, NamedAPIResource } from '../types';
import type { PokemonType } from '../pokemon/types';

export interface PokemonFormSprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
}

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource;
  types: PokemonType[];
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource;
  names: Name[];
  form_names: Name[];
}

export interface GetPokemonFormParams {
  idOrName: string | number;
}
