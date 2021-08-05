// Redux Types Imports
import IUser from "../../interfaces/IUser";
import {
  IUserState,
  UserActionsTypes,
  REGISTER,
  LOGIN,
  LOGOUT,
} from "./Types";

const initialState: IUserState = {
  user: null,
};

export default (
  state: IUserState = initialState,
  action: UserActionsTypes
): IUserState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload.user as IUser,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload.user as IUser,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};