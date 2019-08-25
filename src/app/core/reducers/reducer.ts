import { combineReducers } from 'redux';

import dropdown, { IDropdownState } from '../components/dropdown/DropdownReducer';
import loaders, { ISpinnerState } from '../components/spinner/SpinnerReducer';
import orders from '../../orders/OrdersReducer';
import order from '../../order/OrderReducer';
import { Order } from '../models/Order';

export interface IRootState {
  dropdown: IDropdownState;
  orders: Order[];
  order: Order;
  loaders: ISpinnerState[];
}

const reducer = combineReducers<IRootState>({ dropdown, orders, order, loaders });

export default reducer;
