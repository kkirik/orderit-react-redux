import React, { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import map from 'lodash/map';
import find from 'lodash/find';

import { Block } from '../core/css-in-js/blocks';
import { DT, DD } from '../core/css-in-js/typography';
import { Order } from '../core/models/Order';
import { setNewOrder } from '../core/actions/orders';
import { LOAD_ORDER } from '../core/constants';
import { setLoader, unsetLoader } from '../core/actions/loaders';
import Spinner from '../core/layout/Spinner';
import store from '../core/store';

interface IProps extends RouteComponentProps<{ id: string }> {
  order?: Order;
  isFetching?: boolean;
  setOrder?: (order: Order) => void;
}

const OrderPage: FC<IProps> = ({ match, order, setOrder, isFetching }) => {
  useEffect(() => {
    function getOrder() {
      return async (dispatch: Dispatch) => {
        dispatch(setLoader(LOAD_ORDER));

        try {
          const res = await fetch(`/api/orders/${match.params.id}`);
          const data: Order = await res.json();

          setOrder(new Order(data));
        } finally {
          dispatch(unsetLoader(LOAD_ORDER));
        }
      };
    }

    store.dispatch(getOrder());
  }, []);

  if (isFetching || !order) return <Spinner />;

  return (
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
          <DD>{order.price}$</DD>
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
};

const mapStateToProps = (state: any) => {
  const loader = find(state.loaders, ['name', LOAD_ORDER]);

  console.log(state);

  return {
    order: state.orders.order,
    isFetching: loader && loader.isFetching,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setOrder: (order: Order) => dispatch(setNewOrder(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPage);
