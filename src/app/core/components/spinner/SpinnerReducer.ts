import reject from 'lodash/reject';

import { SET_LOADING, UNSET_LOADING } from '../../constants';

interface IAction {
  type: string;
  name: string;
  isFetching: boolean;
}

function loader(state: IAction[] = [], action: IAction) {
  switch (action.type) {
    case SET_LOADING:
      return [...state, { name: action.name, isFetching: action.isFetching }];

    case UNSET_LOADING:
      return reject(state, ['name', action.name]);

    default:
      return state;
  }
}

export default loader;
