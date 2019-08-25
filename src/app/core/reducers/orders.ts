/* eslint-disable no-undef */
import isArray from 'lodash/isArray';

import { SET_ORDER, SET_ORDERS } from '../constants';
import { Order } from '../models/Order';

interface IAction {
  type: string;
  data: Order | Order[];
}

function orders(state = {}, action: IAction) {
  switch (action.type) {
    case SET_ORDERS:
      return isArray(action.data) ? { ...state, orders: [...action.data] } : { ...state };
    case SET_ORDER:
      return { ...state, order: action.data };
    default:
      return state;
  }
}

export default orders;
