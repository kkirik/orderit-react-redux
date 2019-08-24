import { combineReducers } from 'redux';

function reducer1(state: boolean = false, action: { type: string; data: boolean }) {
  switch (action.type) {
    case 'LOAD_DATA':
      return false;
    default:
      return state;
  }
}

const reducer = combineReducers(reducer1);

export default reducer;
