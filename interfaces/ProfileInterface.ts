export interface IState {
  isLoading: boolean;
  message?: string | null;
  profileInformation: profileInformationPayload;
  isSuccess: boolean;
}

export interface profileInformationPayload {
  email: string;
  data: {
    firstName: string;
    weight: number;
    height: number;
    birthDate: string;
    gender: string;
    country: string;
  };
}

export interface profileUpdatePayload {
  firstName: string;
  weight: string;
  height: string;
  birthDate: string;
  gender: string;
  country: string;
}

export enum ActionType {
  REQUEST_GET_PROFILE = 'REQUEST_GET_PROFILE',
  GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
  GET_PROFILE_ERROR = 'GET_PROFILE_ERROR',
  REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE',
  UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR',
  CLEAN_ERROR = 'CLEAN_ERROR',
}

export interface REQUEST_GET_PROFILE {
  type: ActionType.REQUEST_GET_PROFILE;
}

export interface GET_PROFILE_SUCCESS {
  type: ActionType.GET_PROFILE_SUCCESS;
  payload: profileInformationPayload;
}

export interface GET_PROFILE_ERROR {
  type: ActionType.GET_PROFILE_ERROR;
  payload: IState;
}

export interface REQUEST_UPDATE_PROFILE {
  type: ActionType.REQUEST_UPDATE_PROFILE;
}

export interface UPDATE_PROFILE_SUCCESS {
  type: ActionType.UPDATE_PROFILE_SUCCESS;
}

export interface UPDATE_PROFILE_ERROR {
  type: ActionType.UPDATE_PROFILE_ERROR;
  payload: IState;
}

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_GET_PROFILE
  | GET_PROFILE_SUCCESS
  | GET_PROFILE_ERROR
  | REQUEST_UPDATE_PROFILE
  | UPDATE_PROFILE_SUCCESS
  | UPDATE_PROFILE_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
