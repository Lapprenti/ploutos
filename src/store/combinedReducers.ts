// Partial Libraries Imports
import { combineReducers } from "redux";

// Redux Reducers Imports
import UserReducer from "./user/Reducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;