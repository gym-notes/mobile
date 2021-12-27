export interface IState {
  token?: string | null;
  loading: boolean;
  message?: string | null;
}

export enum ActionType {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT = 'LOGOUT',
  LOGIN_ERROR = 'LOGIN_ERROR',
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

export type ActionTypes = REQUEST_LOGIN | LOGIN_SUCCESS | LOGOUT | LOGIN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
