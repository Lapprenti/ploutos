import { Dispatch } from "redux";

// Redux Types Imports
import {
  REGISTER,
  LOGIN,
  LOGOUT,
} from "./Types";

import IUser from "../../interfaces/IUser";


//#region User action


export const registerUserAction = (
  user: IUser
) => {
  return (dispatch: Dispatch) => {
    dispatch(
      registerUser(user)
    );
  };
};

export const loginUserAction = (
  user: IUser
) => {
  return (dispatch: Dispatch) => {
    dispatch(
      loginUser(user)
    );
  };
};

export const logoutUserAction = () => {
  return (dispatch: Dispatch) => {
    dispatch(
      logoutUser()
    );
  };
};

//#endregion

//#region Handling

const registerUser = (user: IUser) => ({
  type: REGISTER,
  payload: {
    user,
  },
});

const loginUser = (user: IUser) => ({
  type: LOGIN,
  payload: {
    user,
  },
});

const logoutUser = () => ({
  type: LOGOUT,
  payload: {},
});

//#endregion