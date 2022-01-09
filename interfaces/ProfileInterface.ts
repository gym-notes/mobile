export interface IState {
  isLoading: boolean;
  message?: string | null;
  profileInformation: profileInformationPayload;
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

export enum ActionType {
  REQUEST_GET_PROFILE = 'REQUEST_GET_PROFILE',
  GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS',
  GET_PROFILE_ERROR = 'GET_PROFILE_ERROR',
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

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_GET_PROFILE
  | GET_PROFILE_SUCCESS
  | GET_PROFILE_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
