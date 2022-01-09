export interface IState {
  workoutId?: string;
  isLoading: boolean;
  message?: string | null;
  workoutData: {
    duration: number;
    date: string;
    id: string;
    name: string;
    exercises: Array<IExercisesById>;
  };
}

export interface IGetWorkoutById {
  duration: number;
  date: string;
  id: string;
  name: string;
  exercises: Array<IExercisesById>;
}

export interface ICreateWorkoutPayload {
  planId: string;
  duration: number;
  exercises: Array<IExercises>;
}

export interface IExercises {
  exerciseId?: string;
  sets: Array<ISets>;
}

export interface ISets {
  reps: string;
  weight: string;
}

export interface IExercisesById {
  id: string;
  name: string;
  sets: Array<ISetsById>;
}

export interface ISetsById {
  reps: number;
  weight: number;
}

export enum ActionType {
  REQUEST_CREATE_WORKOUT = 'REQUEST_CREATE_WORKOUT',
  CREATE_WORKOUT_SUCCESS = 'CREATE_WORKOUT_SUCCESS',
  CREATE_WORKOUT_ERROR = 'CREATE_WORKOUT_ERROR',
  CLEAN_ERROR = 'CLEAN_ERROR',
  REQUEST_GET_WORKOUT_BY_ID = 'REQUEST_GET_WORKOUT_BY_ID',
  GET_WORKOUT_BY_ID_SUCCESS = 'GET_WORKOUT_BY_ID_SUCCESS',
  GET_WORKOUT_BY_ID_ERROR = 'GET_WORKOUT_BY_ID_ERROR',
}

export interface REQUEST_CREATE_WORKOUT {
  type: ActionType.REQUEST_CREATE_WORKOUT;
}

export interface CREATE_WORKOUT_SUCCESS {
  type: ActionType.CREATE_WORKOUT_SUCCESS;
  payload: IState;
}

export interface CREATE_WORKOUT_ERROR {
  type: ActionType.CREATE_WORKOUT_ERROR;
  payload: IState;
}

export interface REQUEST_GET_WORKOUT_BY_ID {
  type: ActionType.REQUEST_GET_WORKOUT_BY_ID;
}

export interface GET_WORKOUT_BY_ID_SUCCESS {
  type: ActionType.GET_WORKOUT_BY_ID_SUCCESS;
  payload: IGetWorkoutById;
}

export interface GET_WORKOUT_BY_ID_ERROR {
  type: ActionType.GET_WORKOUT_BY_ID_ERROR;
  payload: IState;
}

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_CREATE_WORKOUT
  | CREATE_WORKOUT_SUCCESS
  | CREATE_WORKOUT_ERROR
  | REQUEST_GET_WORKOUT_BY_ID
  | GET_WORKOUT_BY_ID_SUCCESS
  | GET_WORKOUT_BY_ID_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
