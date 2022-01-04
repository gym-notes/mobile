export interface IState {
  plans?: Array<IMyPlan> | null;
  isLoading: boolean;
  message?: string | null;
}

interface IMyPlan {
  id: string;
  name: string;
}

export enum ActionType {
  REQUEST_GET_MY_PLANS = 'REQUEST_GET_MY_PLANS',
  GET_MY_PLANS_SUCCESS = 'LOGIN_SUCCESS',
  GET_MY_PLANS_ERROR = 'LOGIN_ERROR',
  CLEAN_ERROR = 'CLEAN_ERROR',
}

export interface REQUEST_GET_MY_PLANS {
  type: ActionType.REQUEST_GET_MY_PLANS;
}

export interface GET_MY_PLANS_SUCCESS {
  type: ActionType.GET_MY_PLANS_SUCCESS;
  payload: IState;
}

export interface GET_MY_PLANS_ERROR {
  type: ActionType.GET_MY_PLANS_ERROR;
  payload: IState;
}

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_GET_MY_PLANS
  | GET_MY_PLANS_SUCCESS
  | GET_MY_PLANS_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
