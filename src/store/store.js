import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthReducer } from "./modules/auth/reducer";
import { TicketReducer } from "./modules/ticket/reducer";

const combinedReducers = combineReducers({
  auth:AuthReducer,
  ticket:TicketReducer
});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}