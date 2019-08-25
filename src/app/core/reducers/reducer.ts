import { combineReducers } from 'redux';

import dropdown from '../components/dropdown/DropdownReducer';
import loaders from '../components/spinner/SpinnerReducer';
import orders from '../../orders/OrdersReducer';
import order from '../../order/OrderReducer';

const reducer = combineReducers({ dropdown, orders, order, loaders });

export default reducer;
