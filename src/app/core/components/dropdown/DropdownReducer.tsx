/* eslint-disable sonarjs/no-small-switch */

import { IItem } from './Dropdown';
import { SET_ELEMENT, SET_OPEN_MENU } from '../../constants';

interface IAction {
  type: string;
  data: IItem | boolean;
}

interface IState {
  activeElement?: IItem;
  openMenu?: boolean;
}

export function reducer(state: IState = {}, action: IAction) {
  switch (action.type) {
    case SET_ELEMENT:
      return { ...state, activeElement: action.data };
    case SET_OPEN_MENU:
      return { ...state, openMenu: action.data };
    default:
      return state;
  }
}

export default reducer;
