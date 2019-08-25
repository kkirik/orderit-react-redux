import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import find from 'lodash/find';

import { Order } from '../core/models/Order';
import { LOAD_ORDER } from '../core/constants';
import OrderPage from './OrderPage';
import setNewOrder from './OrderAction';

const mapStateToProps = (state: any) => {
  const loader = find(state.loaders, ['name', LOAD_ORDER]);

  return {
    order: state.order,
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
