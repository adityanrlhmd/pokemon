import type { Effect } from '../types';

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: Effect[];
  flavor_text_entries: Effect[];
}

export interface GetContestEffectParams {
  id: number;
}
