import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {Membre} from '../models/membres/membre';


export interface MembreState extends EntityState<Membre> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const MembreAdapter: EntityAdapter<Membre> = createEntityAdapter<Membre>({
  selectId: (membre: Membre) => membre.id
});

export const initialMembreState: MembreState = MembreAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0
});
