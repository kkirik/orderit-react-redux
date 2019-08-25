import React, { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import map from 'lodash/map';
import find from 'lodash/find';

import { Order } from '../core/models/Order';
import setNewOrders from '../core/actions/orders';
import store from '../core/store';
import { FlexBox, FlexItem } from '../core/css-in-js/blocks';
import OrderCard from './OrderCard';
import Spinner from '../core/layout/Spinner';
import { setLoader, unsetLoader } from '../core/actions/loaders';
import { LOAD_ORDERS } from '../core/constants';

interface IQueryParams {
  search?: string;
}

interface IProps {
  isFetching?: boolean;
  orders?: Order[];
  setOrders: (orders: Order[]) => void;
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
  }, []);

  if (isFetching) return <Spinner />;

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

const mapStateToProps = (state: any) => {
  const loader = find(state.loaders, ['name', LOAD_ORDERS]);

  return {
    orders: state.orders.orders,
    isFetching: loader && loader.isFetching,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setOrders: (orders: Order[]) => dispatch(setNewOrders(orders)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersPage);
