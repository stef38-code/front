import { MembreState, initialMembreState } from './membre.state';

export interface GlobalState {
  Membre: MembreState;
}

export const initialGlobalState: GlobalState = {
  Membre: initialMembreState
};
