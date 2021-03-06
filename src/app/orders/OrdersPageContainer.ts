import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import find from 'lodash/find';

import { Order } from '../core/models/Order';
import { LOAD_ORDERS } from '../core/constants';
import { setNewOrders, IQueryParams, getOrders } from './OrdersAction';
import OrdersPage from './OrdersPage';
import { IRootState, ThunkResult } from '../core/reducers/reducer';

interface IStateProps {
  orders: Order[];
  isFetching: boolean;
}

interface IDispatchProps {
  setOrders: (orders: Order[]) => AnyAction;
  loadOrders: (queryParams: IQueryParams) => Promise<void>;
}

export type OrderPageProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => {
  const loader = find(state.loaders, ['name', LOAD_ORDERS]);

  return {
    orders: state.orders,
    isFetching: loader && loader.isFetching,
  };
};

const mapDispatchToProps = (dispatch: ThunkResult): IDispatchProps => ({
  setOrders: (orders: Order[]) => dispatch(setNewOrders(orders)),
  loadOrders: (queryParams: IQueryParams) => dispatch(getOrders(queryParams)),
});

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersPage);
