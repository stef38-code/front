import {Action, createAction, props} from '@ngrx/store';
export enum UIActionTypes {
  UI_UPDATE_PAGE_TITLE = '[UI] Mise à jour du titre de la page',
  UI_LOAD_PAGE = '[UI] chargement de la page',
  UI_SUCCESS_PAGE = '[UI] Page success',
  UI_FAILURE_PAGE = '[UI] Page FAILURE'
}

export const loadUiFailure = createAction(
  '[Ui] Load Uis Failure',
  props<{ error: any }>()
);
export class UILoadingAction implements Action {
  readonly type = UIActionTypes.UI_LOAD_PAGE;
}
export class UISuccessAction implements Action {
  readonly type = UIActionTypes.UI_SUCCESS_PAGE;
}
export class UIFailedAction implements Action {
  readonly type = UIActionTypes.UI_FAILURE_PAGE;
}
export class UIUpdatePageTitleAction implements Action {
  readonly type = UIActionTypes.UI_UPDATE_PAGE_TITLE;
  payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }
}
export type UIActions =
  UIUpdatePageTitleAction
  | UISuccessAction
  | UILoadingAction;
