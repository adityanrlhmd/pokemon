import type { Name, NamedAPIResource } from '../types';

export interface TypeDamageRelations {
  no_damage_to: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  double_damage_from: NamedAPIResource[];
}

export interface TypePokemon {
  slot: number;
  pokemon: NamedAPIResource;
}

export interface PokemonType {
  id: number;
  name: string;
  damage_relations: TypeDamageRelations;
  past_damage_relations: Array<{
    generation: NamedAPIResource;
    damage_relations: TypeDamageRelations;
  }>;
  game_indices: Array<{
    game_index: number;
    generation: NamedAPIResource;
  }>;
  generation: NamedAPIResource;
  move_damage_class: NamedAPIResource | null;
  names: Name[];
  pokemon: TypePokemon[];
  moves: NamedAPIResource[];
}

export interface GetTypeDetailParams {
  idOrName: string | number;
}
