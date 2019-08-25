/* eslint-disable sonarjs/no-small-switch */

import { SET_ORDERS } from '../core/constants';
import { Order } from '../core/models/Order';

export interface IOrdersAction {
  type: string;
  data: Order[];
}

function reducer(state: Order[] = [], action: IOrdersAction) {
  switch (action.type) {
    case SET_ORDERS:
      return [...action.data];
    default:
      return state;
  }
}

export default reducer;
