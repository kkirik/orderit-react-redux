import { createStore, Middleware, Store } from 'redux';
import isFunction from 'lodash/isFunction';
import forEach from 'lodash/forEach';
import { isObject } from 'util';

import reducer, { IRootState, RootAction } from './reducers/reducer';

const addPromiseThunkSupport: Middleware = (_store) => (next) => (action) => {
  if (isFunction(action)) {
    return action(next);
  }

  if (isFunction(action.then)) {
    return action.then(next);
  }

  return next(action);
};

function applyMiddleware(middlewares: Middleware[], store: Store<IRootState, RootAction>) {
  const newStore = store;

  forEach(middlewares, (middleware) => {
    newStore.dispatch = middleware(store)(store.dispatch);
  });
}

const logger: Middleware = () => (next) => (action) => {
  if (!isObject(action)) return next(action);
  // eslint-disable-next-line no-console
  console.log(action);
  return next(action);
};

const middlewares = [addPromiseThunkSupport, logger];
const store = createStore(reducer);

applyMiddleware(middlewares, store);

export { store as default };
