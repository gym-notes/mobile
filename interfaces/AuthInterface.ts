export interface IState {
  token?: string | null;
  isLoading: boolean;
  message?: string | null;
  isRegisterSucess?: boolean;
}

export enum ActionType {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT = 'LOGOUT',
  LOGIN_ERROR = 'LOGIN_ERROR',
  REQUEST_REGISTER = 'REQUEST_REGISTER',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_ERROR = 'REGISTER_ERROR',
  CLEAN_ERROR = 'LEAN_ERROR',
}

export interface REQUEST_LOGIN {
  type: ActionType.REQUEST_LOGIN;
}

export interface LOGIN_SUCCESS {
  type: ActionType.LOGIN_SUCCESS;
  payload: IState;
}

export interface LOGOUT {
  type: ActionType.LOGOUT;
}

export interface LOGIN_ERROR {
  type: ActionType.LOGIN_ERROR;
  payload: IState;
}

export interface REQUEST_REGISTER {
  type: ActionType.REQUEST_REGISTER;
}

export interface REGISTER_SUCCESS {
  type: ActionType.REGISTER_SUCCESS;
  payload: IState;
}

export interface REGISTER_ERROR {
  type: ActionType.REGISTER_ERROR;
  payload: IState;
}

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_LOGIN
  | LOGIN_SUCCESS
  | LOGOUT
  | LOGIN_ERROR
  | REQUEST_REGISTER
  | REGISTER_SUCCESS
  | REGISTER_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
