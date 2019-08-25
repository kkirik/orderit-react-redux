/* eslint-disable sonarjs/no-small-switch */
import { SET_ORDER } from '../core/constants';
import { Order } from '../core/models/Order';

export interface IOrderAction {
  type: string;
  data: Order;
}

function reducer(state = {}, action: IOrderAction) {
  switch (action.type) {
    case SET_ORDER:
      return new Order(action.data);
    default:
      return state;
  }
}

export default reducer;
