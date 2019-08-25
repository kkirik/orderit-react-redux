import { Order } from '../core/models/Order';
import { SET_ORDER } from '../core/constants';

function setNewOrder(order: Order) {
  return {
    type: SET_ORDER,
    data: order,
  };
}

export default setNewOrder;
