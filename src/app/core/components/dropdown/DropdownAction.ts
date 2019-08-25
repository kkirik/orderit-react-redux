import { IItem } from './Dropdown';
import { SET_ELEMENT, SET_OPEN_MENU } from '../../constants';

export function setActiveElementMenu(element: IItem) {
  return {
    type: SET_ELEMENT,
    data: element,
  };
}

export function setStateOpenMenu(data: boolean) {
  return {
    data,
    type: SET_OPEN_MENU,
  };
}
