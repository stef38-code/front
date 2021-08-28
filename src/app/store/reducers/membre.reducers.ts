import { initialMembreState, MembreState, MembreAdapter } from '../states/Membre.state';
import {MembreAction, MembreActionType} from '../actions/membre-action.actions';

export function MembreReducer( state = initialMembreState, action: MembreAction): MembreState {
  switch (action.type) {
    case MembreActionType.Loading: {
      return { ...state, loading: true };
    }
    case MembreActionType.LoadSuccess: {
      return MembreAdapter.setAll(action.payload.membres, {
        ...state,
        error: false,
        loading: false,
        total: action.payload.total
      });
    }
    case MembreActionType.LoadFailure: {
      return MembreAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0
      });
    }
    default:
      return state;
  }
}
