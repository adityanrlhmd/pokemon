import type { Name, NamedAPIResource } from '../types';

export interface AwesomeName {
  awesome_name: string;
  language: NamedAPIResource;
}

export interface PokemonShape {
  id: number;
  name: string;
  awesome_names: AwesomeName[];
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

export interface GetPokemonShapeParams {
  idOrName: string | number;
}
