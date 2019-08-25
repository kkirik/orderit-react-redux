import { Order } from '../models/Order';
import { SET_ORDERS, SET_ORDER } from '../constants';

export function setNewOrders(orders: Order[]) {
  return {
    type: SET_ORDERS,
    data: orders,
  };
}

export function setNewOrder(order: Order) {
  return {
    type: SET_ORDER,
    data: order,
  };
}

export default setNewOrders;
