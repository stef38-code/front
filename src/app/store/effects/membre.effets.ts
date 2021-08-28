import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { MembreServiceService } from '../../services/membre-service.service';

import {MembreActionType, MembreLoadAction, MembreLoadFailAction, MembreLoadSuccessAction} from '../actions/membre-action.actions';
import {MembreParameter} from '../models/membres/membre-parameter';
import {MembreReponse} from '../models/membres/membre-reponse';

@Injectable()
export class CustomerEffects {
  constructor(private service: MembreServiceService, private actions$: Actions) { }

  @Effect()
  public loadCustomers$ = this.actions$
    .pipe(ofType<MembreLoadAction>(MembreActionType.Loading),
      map(action => action.payload),
      switchMap((params: MembreParameter) =>
        this.service.getMembres(params).pipe(
          map((response: MembreReponse) => new MembreLoadSuccessAction(response)),
          catchError((error) => of(new MembreLoadFailAction(error)))
        )
      )
    );
}
