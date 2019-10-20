import map from 'lodash/map';
import assign from 'lodash/assign';

import { Order } from './Order';

class Profile {
  firstname: string;
  lastname: string;
  balance: number;
  orderList: Order[] = [];

  get orders() {
    return map(this.orderList, (order) => new Order(order));
  }

  constructor(profile?: Omit<Profile, 'orders'>) {
    assign(this, profile);
  }
}

export default Profile;
