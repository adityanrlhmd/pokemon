import { pokemonApi } from '../api';
import type { GetVersionGroupParams, VersionGroup } from './types';

class VersionGroupFetcher {
  getVersionGroup({ idOrName }: GetVersionGroupParams): Promise<VersionGroup> {
    return pokemonApi.get(`/version-group/${idOrName}`);
  }
}
export const versionGroupFetcher = new VersionGroupFetcher();
