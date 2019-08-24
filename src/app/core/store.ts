import { createStore, Middleware, Store } from 'redux';

import reducer from './reducer';

const addPromiseThunkSupport: Middleware = (_store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(next);
  }

  if (typeof action.then === 'function') {
    return action.then(next);
  }

  return next(action);
};

function applyMiddleware(middlewares: Middleware[], store: Store) {
  const newStore = store;

  middlewares.forEach((middleware) => {
    newStore.dispatch = middleware(store)(store.dispatch);
  });
}

const middlewares = [addPromiseThunkSupport];
const store = createStore(reducer);

applyMiddleware(middlewares, store);

export { store as default };
