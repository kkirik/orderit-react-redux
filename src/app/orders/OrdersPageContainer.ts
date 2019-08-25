import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import find from 'lodash/find';

import { Order } from '../core/models/Order';
import { LOAD_ORDERS } from '../core/constants';
import setNewOrders from './OrdersAction';
import OrdersPage from './OrdersPage';

const mapStateToProps = (state: any) => {
  const loader = find(state.loaders, ['name', LOAD_ORDERS]);

  return {
    orders: state.orders,
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
