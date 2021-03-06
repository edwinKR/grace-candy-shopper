import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import products from './products';
import cart from './cart';
import info from './info';
import adminCart from './adminCart';
import order from './order';

const reducer = combineReducers({
  user,
  products,
  cart,
  info,
  adminCart,
  order
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './products';
export * from './cart';
export * from './info';
export * from './adminCart';
export * from './order';
