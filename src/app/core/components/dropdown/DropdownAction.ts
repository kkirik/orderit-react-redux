import { IItem } from './Dropdown';
import { SET_ELEMENT, SET_OPEN_MENU } from '../../constants';

interface ISetElement {
  type: 'SET_ELEMENT';
  activeElement: IItem;
}

interface ISetOpenMenu {
  type: 'SET_OPEN_MENU';
  openMenu: boolean;
}

export type DropdownAction = ISetElement | ISetOpenMenu;

export function setActiveElementMenu(activeElement: IItem): ISetElement {
  return {
    activeElement,
    type: SET_ELEMENT,
  };
}

export function setStateOpenMenu(openMenu: boolean): ISetOpenMenu {
  return {
    openMenu,
    type: SET_OPEN_MENU,
  };
}
