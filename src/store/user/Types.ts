// Types Imports
import IUser from "../../interfaces/IUser";

//#region State

export interface IUserState {
  user: IUser | null;
}

//#endregion State

//#region Requests

export const REGISTER = "@user/REGISTER";
export const LOGIN = "@user/LOGIN";
export const LOGOUT = "@user/LOGOUT";

interface IRegister {
  type: typeof REGISTER;
  payload: {
    user: IUser;
  };
}

interface ILogin {
  type: typeof LOGIN;
  payload: {
    user: IUser;
  };
}

interface ILogout {
  type: typeof LOGOUT;
}

//#endregion Requests

export type UserActionsTypes =  
| IRegister 
| ILogin 
| ILogout 