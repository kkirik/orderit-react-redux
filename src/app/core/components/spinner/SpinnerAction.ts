import { SET_LOADING, UNSET_LOADING } from '../../constants';

interface ISetLoader {
  type: typeof SET_LOADING;
  name: string;
  isFetching: boolean;
}

interface IUnsetLoader {
  type: typeof UNSET_LOADING;
  name: string;
}

export type SpinnerActionType = ISetLoader | IUnsetLoader;

export function setLoader(name: string): ISetLoader {
  return {
    name,
    type: SET_LOADING,
    isFetching: true,
  };
}

export function unsetLoader(name: string): IUnsetLoader {
  return {
    name,
    type: UNSET_LOADING,
  };
}
