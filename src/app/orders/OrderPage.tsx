import React, { FC } from 'react';
import map from 'lodash/map';

import { Block } from '../core/css-in-js/blocks';
import { Order } from '../core/models/Order';
import { DT, DD } from '../core/css-in-js/typography';

interface IProps {
  order: Order;
}

const OrderPage: FC<IProps> = ({ order }) => (
  <Block
    width="700px"
    margin="30px auto"
    borderRadius="10px"
    boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.15)"
  >
    <Block
      center
      height="25px"
      background={order.statusColor}
      borderRadius="10px 10px 0 0"
      color="#fafafa"
    >
      {order.status}
    </Block>
    <Block padding="10px">
      <dl>
        <DT>Order number:</DT>
        <DD>{order.orderNumber}</DD>
      </dl>
      <dl>
        <DT>Fullname:</DT>
        <DD>{order.customer}</DD>
      </dl>
      <dl>
        <DT>Order price:</DT>
        <DD>
          {order.price}
          $
          </DD>
      </dl>
      <dl>
        <DT>What's ordered:</DT>
        <DD>
          {map(order.orderList, (el) => (
            <span key={el}>{el}</span>
          ))}
        </DD>
      </dl>
    </Block>
  </Block>
);

export default OrderPage;
