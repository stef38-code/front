import {ActionReducerMap, createReducer} from '@ngrx/store';
import {UIReducer, UIState} from './ui.reducer';
import {MembreState} from '../states/membre.state';
import {MembreReducer} from './membre.reducers';


export const appStateFeatureKey = 'appState';

export interface AppState {
  ui: UIState;
  membres: MembreState;
}
export const reducersState: ActionReducerMap<AppState> = {
  ui: UIReducer,
  membres: MembreReducer,
};


export const reducer = createReducer(
  reducersState,
);

