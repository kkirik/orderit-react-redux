import React, { FC, useEffect } from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import store from '../core/store';
import { FlexBox, FlexItem } from '../core/css-in-js/blocks';
import OrderCard from './OrderCard';
import Spinner from '../core/components/spinner/Spinner';
import { OrderPageProps } from './OrdersPageContainer';

const OrdersPage: FC<OrderPageProps> = ({ orders, setOrders, isFetching, loadOrders }) => {
  useEffect(() => {
    loadOrders({});

    return () => {
      store.dispatch(setOrders([]));
    };
  }, []);

  if (isFetching || isEmpty(orders)) return <Spinner />;

  return (
    <FlexBox justifycontent="flex-start" margin="20px 0 0 0">
      {map(orders, (order) => (
        <FlexItem key={order.orderNumber} width="24.5%" margin="0 0 20px 0">
          <OrderCard order={order} />
        </FlexItem>
      ))}
    </FlexBox>
  );
};

export default OrdersPage;
