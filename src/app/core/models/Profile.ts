import { Order } from './Order';

class User {
  firstname: string;
  lastname: string;
  balance: number;
  orderList: Order[] = [];

  get orders() {
    return _.map(this.orderList, (order) => new Order(order));
  }

  constructor(profile?: Omit<User, 'orders'>) {
    Object.assign(this, profile);
  }
}

export default User;
