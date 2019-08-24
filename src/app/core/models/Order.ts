export enum OrderStatus {
  Done = 'done',
  Preparing = 'preparing',
  Error = 'error',
  New = 'new',
  Ready = 'ready',
}

export const statusColors = {
  [OrderStatus.New]: 'grey',
  [OrderStatus.Done]: 'green',
  [OrderStatus.Ready]: 'coral',
  [OrderStatus.Error]: 'red',
  [OrderStatus.Preparing]: 'lightblue',
};

export class Order {
  orderNumber: number;
  customer: string;
  price: number;
  orderList: string[] = [];
  status: OrderStatus;

  get statusColor() {
    return statusColors[this.status] || 'grey';
  }

  constructor(order?: Omit<Order, 'statusColor'>) {
    Object.assign(this, order);
  }
}
