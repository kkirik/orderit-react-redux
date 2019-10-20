import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { Order } from '../core/models/Order';
import { SET_ORDER, LOAD_ORDER } from '../core/constants';
import { setLoader, unsetLoader } from '../core/components/spinner/SpinnerAction';

export interface IOrderAction {
  type: typeof SET_ORDER;
  data: Order;
}

export function setNewOrder(order: Order): IOrderAction {
  return {
    data: order,
    type: SET_ORDER,
  };
}

export function getOrder(id: string): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch) => {
    dispatch(setLoader(LOAD_ORDER));

    try {
      const res = await fetch(`/api/orders/${id}`);
      const data: Order = await res.json();

      dispatch(setNewOrder(data));
    } finally {
      dispatch(unsetLoader(LOAD_ORDER));
    }
  };
}
