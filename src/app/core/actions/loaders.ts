import { SET_LOADING, UNSET_LOADING } from '../constants';

export function setLoader(name: string) {
  return {
    name,
    type: SET_LOADING,
    isFetching: true,
  };
}

export function unsetLoader(name: string) {
  return {
    name,
    type: UNSET_LOADING,
  };
}
