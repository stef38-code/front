import { UIActions, UIActionTypes } from '../actions/ui.actions';


export class UIState {
  pageTitle: string;
}

const initialUIState: UIState = {
  pageTitle: null,
};

export function UIReducer( action: UIActions, state: UIState = initialUIState): UIState {
  switch (action.type) {
   case UIActionTypes.UI_UPDATE_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload
      };
    default:
      return state;
  }
}

