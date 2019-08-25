import { combineReducers } from 'redux';

import { activeElement, openMenu } from '../components/dropdownReducers';
import loaders from './loaders';
import orders from './orders';

const reducer = combineReducers({ activeElement, openMenu, orders, loaders });

export default reducer;
