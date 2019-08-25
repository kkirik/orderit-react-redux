/* eslint-disable sonarjs/no-small-switch */

import { IItem } from './Dropdown';
import { SET_ELEMENT, SET_OPEN_MENU } from '../constants';

interface IAction<T> {
  type: string;
  data: T;
}

export function activeElement(state: IItem = {}, action: IAction<IItem>) {
  switch (action.type) {
    case SET_ELEMENT:
      return { ...state, activeElement: action.data };
    default:
      return state;
  }
}

export function openMenu(state = false, action: IAction<boolean>) {
  switch (action.type) {
    case SET_OPEN_MENU:
      return action.data;
    default:
      return state;
  }
}
