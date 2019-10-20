import map from 'lodash/map';

import { SET_ORDERS, LOAD_ORDERS } from '../core/constants';
import { Order } from '../core/models/Order';
import { setLoader, unsetLoader } from '../core/components/spinner/SpinnerAction';
import { ThunkResult } from '../core/reducers/reducer';

export interface IOrdersAction {
  type: 'SET_ORDERS';
  data: Order[];
}

export interface IQueryParams {
  search?: string;
}

export function setNewOrders(orders: Order[]): IOrdersAction {
  return {
    type: SET_ORDERS,
    data: orders,
  };
}

export function getOrders(queryParams: IQueryParams) {
  return async (dispatch: ThunkResult) => {
    dispatch(setLoader(LOAD_ORDERS));

    const queryString = queryParams.search ? `?search=${queryParams.search}` : '';

    try {
      const res = await fetch(`/api/orders${queryString}`);
      const data: Order[] = await res.json();
      const newOrders = map(data, (o) => new Order(o));

      dispatch(setNewOrders(newOrders));
    } finally {
      dispatch(unsetLoader(LOAD_ORDERS));
    }
  };
}

export default setNewOrders;
