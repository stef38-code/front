import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MembreState, MembreAdapter } from '../states/Membre.state';

export const {
  selectIds: _selectMembreDataIds,
  selectEntities: _selectMembreEntities,
  selectAll: _selectAllMembre,
  selectTotal: _selectMembreTotal
} = MembreAdapter.getSelectors();

export const selectMembreState = createFeatureSelector<MembreState>('Membre');

export const selectMembreIds = createSelector(
  selectMembreState,
  _selectMembreDataIds
);

export const selectMembreEntities = createSelector(
  selectMembreState,
  _selectMembreEntities
);

export const selectAllMembre = createSelector(
  selectMembreState,
  _selectAllMembre
);

export const selectMembreError = createSelector(
  selectMembreState,
  (state: MembreState): boolean => state.error
);

export const selectMembreLoading = createSelector(
  selectMembreState,
  (state: MembreState): boolean => state.loading
);


export const selectMembreTotal = createSelector(
  selectMembreState,
  (state: MembreState): number => state.total
);
