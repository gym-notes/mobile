export interface IState {
  workoutId?: string;
  isLoading: boolean;
  message?: string | null;
}

export interface IWorkoutPayload {
  planId: string;
  duration: number;
  exercises: Array<IExercises>;
}

export interface IExercises {
  exerciseId?: string;
  sets: Array<ISets>;
}

export interface ISets {
  reps: number;
  weight: number;
}

export enum ActionType {
  REQUEST_CREATE_WORKOUT = 'REQUEST_CREATE_WORKOUT',
  CREATE_WORKOUT_SUCCESS = 'CREATE_WORKOUT_SUCCESS',
  CREATE_WORKOUT_ERROR = 'CREATE_WORKOUT_ERROR',
  CLEAN_ERROR = 'CLEAN_ERROR',
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

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_CREATE_WORKOUT
  | CREATE_WORKOUT_SUCCESS
  | CREATE_WORKOUT_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
