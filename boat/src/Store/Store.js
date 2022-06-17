import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import { registerReducer } from "./register/register.reducer";
import { loginReducer } from "./login/login.reducer";

const rootreducer = combineReducers({
  cart: cartReducer,
  register: registerReducer,
  login: loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
