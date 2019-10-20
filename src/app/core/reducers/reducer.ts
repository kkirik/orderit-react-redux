import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import orders from '../../orders/OrdersReducer';
import dropdown, { IDropdownState } from '../components/dropdown/DropdownReducer';
import loaders, { ISpinnerState } from '../components/spinner/SpinnerReducer';
import order from '../../order/OrderReducer';
import profile from '../../profile/ProfileReducer';
import { Order } from '../models/Order';
import Profile from '../models/Profile';
import { IOrdersAction } from '../../orders/OrdersAction';
import { ISetProfileAction } from '../../profile/ProfileAction';
import { IOrderAction } from '../../order/OrderAction';
import { DropdownAction } from '../components/dropdown/DropdownAction';
import { SpinnerActionType } from '../components/spinner/SpinnerAction';

export interface IRootState {
  dropdown: IDropdownState;
  orders: Order[];
  order: Order;
  loaders: ISpinnerState[];
  profile: Profile;
}

export type RootAction =
  | IOrdersAction
  | ISetProfileAction
  | IOrderAction
  | DropdownAction
  | SpinnerActionType;

export type ThunkResult = ThunkDispatch<IRootState, {}, RootAction>;

const reducer = combineReducers<IRootState, RootAction>({
  dropdown,
  orders,
  order,
  loaders,
  profile,
});

export default reducer;
