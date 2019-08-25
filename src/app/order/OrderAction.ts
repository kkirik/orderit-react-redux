import { Order } from '../core/models/Order';
import { SET_ORDER } from '../core/constants';

export interface IOrderAction {
  type: 'SET_ORDER';
  data: Order;
}

function setNewOrder(order: Order): IOrderAction {
  return {
    type: SET_ORDER,
    data: order,
  };
}

export default setNewOrder;
