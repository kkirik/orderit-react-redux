import { connect } from 'react-redux';
import find from 'lodash/find';
import { ThunkDispatch } from 'redux-thunk';

import { Order } from '../core/models/Order';
import { LOAD_ORDER } from '../core/constants';
import OrderPage from './OrderPage';
import { getOrder } from './OrderAction';
import { IRootState } from '../core/reducers/reducer';

interface IStateProps {
  order: Order;
  isFetching: boolean;
}

interface IDispatchProps {
  loadOrder: (id: string) => void;
}

export type IOrderProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IRootState): IStateProps => {
  const loader = find(state.loaders, ['name', LOAD_ORDER]);

  return {
    order: state.order,
    isFetching: loader && loader.isFetching,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): IDispatchProps => ({
  loadOrder: (id) => dispatch(getOrder(id)),
});

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(OrderPage);
