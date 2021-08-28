import { Action } from '@ngrx/store';
import { MembreParameter } from '../models/membres/membre-parameter';
import { MembreReponse } from '../models/membres/membre-reponse';

export enum MembreActionType {
  Loading = '[Membre] Loading',
  LoadSuccess = '[Membre] LoadSuccess',
  LoadFailure = '[Membre] LoadFailure'
}

export class MembreLoadAction implements Action {
  public readonly type = MembreActionType.Loading;
  constructor(public payload: MembreParameter) {}
}

export class MembreLoadSuccessAction implements Action {
  public readonly type = MembreActionType.LoadSuccess;
  constructor(public payload: MembreReponse) {}
}

export class MembreLoadFailAction implements Action {
  public readonly type = MembreActionType.LoadFailure;
  constructor(public error: any) {}
}

export type MembreAction = MembreLoadAction | MembreLoadSuccessAction | MembreLoadFailAction;
