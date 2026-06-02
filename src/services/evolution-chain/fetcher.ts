import { pokemonApi } from '../api';
import type { GetEvolutionChainParams, EvolutionChain } from './types';

class EvolutionChainFetcher {
  getEvolutionChain({ id }: GetEvolutionChainParams): Promise<EvolutionChain> {
    return pokemonApi.get(`/evolution-chain/${id}`);
  }
}

export const evolutionChainFetcher = new EvolutionChainFetcher();
