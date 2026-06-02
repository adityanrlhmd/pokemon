import type { Name, NamedAPIResource } from '../types';

export interface PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

export interface GetPokemonHabitatParams {
  idOrName: string | number;
}
