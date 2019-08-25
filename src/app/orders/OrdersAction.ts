import { SET_ORDERS } from '../core/constants';
import { Order } from '../core/models/Order';

export function setNewOrders(orders: Order[]) {
  return {
    type: SET_ORDERS,
    data: orders,
  };
}

export default setNewOrders;
