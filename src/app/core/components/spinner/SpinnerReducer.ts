import reject from 'lodash/reject';

import { SET_LOADING, UNSET_LOADING } from '../../constants';
import { SpinnerActionType } from './SpinnerAction';

export interface ISpinnerState {
  name: string;
  isFetching: boolean;
}

function reducer(state: ISpinnerState[] = [], action: SpinnerActionType): ISpinnerState[] {
  switch (action.type) {
    case SET_LOADING:
      return [...state, { name: action.name, isFetching: action.isFetching }];

    case UNSET_LOADING:
      return reject(state, ['name', action.name]);

    default:
      return state;
  }
}

export default reducer;
