import {ActionReducerMap, createReducer} from '@ngrx/store';
import {UIReducer, UIState} from './ui.reducer';


export const appStateFeatureKey = 'appState';

export interface AppState {
  ui: UIState;
}
export const reducersState: ActionReducerMap<AppState> = {
  ui: UIReducer,
};


export const reducer = createReducer(
  reducersState,
);

