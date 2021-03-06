export interface IState {
  plans: Array<IMyPlans>;
  isLoading: boolean;
  message?: string | null;
  errors?: string | null;
  myPlan?: { id: string; name: string; exercises: Array<IExercises> } | null;
  planId: string;
  isSuccess: boolean;
  isDelete: boolean;
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
  reps: string;
  weight: string;
}

export interface IResponseMyPlan {
  id: string;
  name: string;
  exercises: Array<IExercises>;
}

export interface IResponseCreatePlan {
  name: string;
  exercises: Array<IPlanExercises>;
}

interface IPlanExercises {
  exerciseId: string;
  series: number;
  reps: string;
  weight: string;
}

export enum ActionType {
  REQUEST_GET_ALL_PLANS = 'REQUEST_GET_ALL_PLANS',
  GET_ALL_PLANS_SUCCESS = 'GET_ALL_PLANS_SUCCESS',
  GET_ALL_PLANS_ERROR = 'GET_ALL_PLANS_ERROR',
  CLEAN_ERROR = 'CLEAN_ERROR',
  REQUEST_GET_MY_PLAN = 'REQUEST_GET_MY_PLAN',
  GET_MY_PLAN_SUCCESS = ' GET_MY_PLAN_SUCCESS',
  GET_MY_PLAN_ERROR = 'GET_MY_PLAN_ERROR',
  REQUEST_CREATE_MY_PLAN = 'REQUEST_CREATE_MY_PLAN',
  CREATE_MY_PLAN_SUCCESS = ' CREATE_MY_PLAN_SUCCESS',
  CREATE_MY_PLAN_ERROR = 'CREATE_MY_PLAN_ERROR',
  REQUEST_DELETE_PLAN = 'REQUEST_DELETE_PLAN',
  DELETE_PLAN_SUCCESS = ' DELETE_PLAN_SUCCESS',
  DELETE_PLAN_ERROR = 'DELETE_PLAN_ERROR',
  SET_PLAN_ID = 'SET_PLAN_ID ',
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

export interface SET_PLAN_ID {
  type: ActionType.SET_PLAN_ID;
  payload: string;
}

export interface REQUEST_CREATE_MY_PLAN {
  type: ActionType.REQUEST_CREATE_MY_PLAN;
}

export interface CREATE_MY_PLAN_SUCCESS {
  type: ActionType.CREATE_MY_PLAN_SUCCESS;
}

export interface CREATE_MY_PLAN_ERROR {
  type: ActionType.CREATE_MY_PLAN_ERROR;
  payload: IState;
}

export interface REQUEST_DELETE_PLAN {
  type: ActionType.REQUEST_DELETE_PLAN;
}

export interface DELETE_PLAN_SUCCESS {
  type: ActionType.DELETE_PLAN_SUCCESS;
}

export interface DELETE_PLAN_ERROR {
  type: ActionType.DELETE_PLAN_ERROR;
  payload: IState;
}

export type ActionTypes =
  | REQUEST_GET_ALL_PLANS
  | GET_ALL_PLANS_SUCCESS
  | GET_ALL_PLANS_ERROR
  | REQUEST_GET_MY_PLAN
  | GET_MY_PLAN_SUCCESS
  | GET_MY_PLAN_ERROR
  | REQUEST_CREATE_MY_PLAN
  | CREATE_MY_PLAN_SUCCESS
  | CREATE_MY_PLAN_ERROR
  | REQUEST_DELETE_PLAN
  | DELETE_PLAN_SUCCESS
  | DELETE_PLAN_ERROR
  | CLEAN_ERROR
  | SET_PLAN_ID;

export type Dispatch = (action: ActionTypes) => void;
