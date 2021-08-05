import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Redux Reducers Imports
import RootReducer from "./combinedReducers";
export const store = createStore(RootReducer, undefined, applyMiddleware(thunk));