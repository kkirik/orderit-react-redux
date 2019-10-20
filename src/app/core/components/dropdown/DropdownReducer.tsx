import { IItem } from './Dropdown';
import { SET_ELEMENT, SET_OPEN_MENU } from '../../constants';
import { DropdownAction } from './DropdownAction';

export interface IDropdownState {
  activeElement?: IItem;
  openMenu?: boolean;
}

function reducer(state: IDropdownState = {}, action: DropdownAction) {
  switch (action.type) {
    case SET_ELEMENT:
      return { ...state, activeElement: action.activeElement };
    case SET_OPEN_MENU:
      return { ...state, openMenu: action.openMenu };
    default:
      return state;
  }
}

export default reducer;
