import React, { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import { Order } from '../core/models/Order';
import store from '../core/store';
import { FlexBox, FlexItem } from '../core/css-in-js/blocks';
import OrderCard from './OrderCard';
import Spinner from '../core/components/spinner/Spinner';
import { setLoader, unsetLoader } from '../core/components/spinner/SpinnerAction';
import { LOAD_ORDERS } from '../core/constants';
import { IOrdersAction } from './OrdersReducer';

interface IQueryParams {
  search?: string;
}

interface IProps {
  isFetching?: boolean;
  orders?: Order[];
  setOrders: (orders: Order[]) => IOrdersAction;
}

const OrdersPage: FC<IProps> = ({ orders, setOrders, isFetching }) => {
  function getOrders(queryParams: IQueryParams) {
    return async (dispatch: Dispatch) => {
      dispatch(setLoader(LOAD_ORDERS));

      const params = {
        ...(queryParams && { search: queryParams.search }),
      };

      try {
        const res = await fetch('/api/orders');
        const data: Order[] = await res.json();
        const newOrders = map(data, (o) => new Order(o));

        setOrders(newOrders);
      } finally {
        dispatch(unsetLoader(LOAD_ORDERS));
      }
    };
  }

  useEffect(() => {
    store.dispatch(getOrders({}));

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
