import { UIActions, UIActionTypes } from '../../shared/actions/ui.actions';


export class UIState {
  pageTitle: string;
}

const initialUIState: UIState = {
  pageTitle: null,
};

export function UIReducer(  state: UIState = initialUIState, action: UIActions): UIState {
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

