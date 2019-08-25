import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

import { Order } from '../core/models/Order';
import { StyledOrderCard } from '../core/css-in-js/order';
import { Block } from '../core/css-in-js/blocks';
import { DT, DD } from '../core/css-in-js/typography';

interface IProps {
  order: Order;
}

const OrderCard: FC<IProps> = ({ order }) => (
  <StyledOrderCard
    width="300px"
    margin="10px"
    borderRadius="10px"
    boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.15)"
  >
    <Link to={`/orders/${order.orderNumber}`}>
      <Block
        center
        height="20px"
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
          <DD>{order.price} $</DD>
        </dl>
        <dl>
          <DT>What's ordered:</DT>
          <DD>
            {map(order.orderList, (el) => (
              <span key={el}> {el}</span>
            ))}
          </DD>
        </dl>
      </Block>
    </Link>
  </StyledOrderCard>
);

export default OrderCard;
