export interface IState {
  plans?: Array<IMyPlans> | null;
  isLoading: boolean;
  message?: string | null;
  myPlan?: { id: string; name: string; exercises: Array<IExercises> } | null;
}

interface IMyPlans {
  id: string;
  name: string;
}

interface IExercises {
  id: string;
  exerciseId: string;
  name: string;
  series: number;
  reps: number;
  weight: number;
}

export interface IResponseMyPlan {
  id: string;
  name: string;
  exercises: Array<IExercises>;
}

export enum ActionType {
  REQUEST_GET_ALL_PLANS = 'REQUEST_GET_ALL_PLANS',
  GET_ALL_PLANS_SUCCESS = 'GET_ALL_PLANS_SUCCESS',
  GET_ALL_PLANS_ERROR = 'GET_ALL_PLANS_ERROR',
  CLEAN_ERROR = 'CLEAN_ERROR',
  REQUEST_GET_MY_PLAN = 'REQUEST_GET_MY_PLAN',
  GET_MY_PLAN_SUCCESS = ' GET_MY_PLAN_SUCCESS',
  GET_MY_PLAN_ERROR = 'GET_MY_PLAN_ERROR',
}

export interface REQUEST_GET_ALL_PLANS {
  type: ActionType.REQUEST_GET_ALL_PLANS;
}

export interface GET_ALL_PLANS_SUCCESS {
  type: ActionType.GET_ALL_PLANS_SUCCESS;
  payload: IState;
}

export interface GET_ALL_PLANS_ERROR {
  type: ActionType.GET_ALL_PLANS_ERROR;
  payload: IState;
}

export interface REQUEST_GET_MY_PLAN {
  type: ActionType.REQUEST_GET_MY_PLAN;
}

export interface GET_MY_PLAN_SUCCESS {
  type: ActionType.GET_MY_PLAN_SUCCESS;
  payload: IResponseMyPlan;
}

export interface GET_MY_PLAN_ERROR {
  type: ActionType.GET_MY_PLAN_ERROR;
  payload: IState;
}

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_GET_ALL_PLANS
  | GET_ALL_PLANS_SUCCESS
  | GET_ALL_PLANS_ERROR
  | REQUEST_GET_MY_PLAN
  | GET_MY_PLAN_SUCCESS
  | GET_MY_PLAN_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
