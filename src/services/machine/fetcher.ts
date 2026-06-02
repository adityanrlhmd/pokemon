import { pokemonApi } from '../api';
import type { GetMachineParams, Machine } from './types';

class MachineFetcher {
  getMachine({ id }: GetMachineParams): Promise<Machine> {
    return pokemonApi.get(`/machine/${id}`);
  }
}
export const machineFetcher = new MachineFetcher();
