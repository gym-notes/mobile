export interface IState {
  isLoading: boolean;
  message?: string | null;
  exercises: Array<IExercisesPayload>;
  exerciseId: string;
}

export interface IExercisesPayload {
  id: string;
  name: string;
}

export enum ActionType {
  REQUEST_GET_EXERCISES = 'REQUEST_GET_EXERCISES',
  GET_EXERCISES_SUCCESS = 'GET_EXERCISES_SUCCESS',
  GET_EXERCISES_ERROR = 'GET_EXERCISES_ERROR',
  REQUEST_CREATE_EXERCISE = 'REQUEST_CREATE_EXERCISE',
  CREATE_EXERCISE_SUCCESS = 'CREATE_EXERCISE_SUCCESS',
  CREATE_EXERCISE_ERROR = 'CREATE_EXERCISE_ERROR',
  CLEAN_ERROR = 'CLEAN_ERROR',
}

export interface REQUEST_GET_EXERCISES {
  type: ActionType.REQUEST_GET_EXERCISES;
}

export interface GET_EXERCISES_SUCCESS {
  type: ActionType.GET_EXERCISES_SUCCESS;
  payload: Array<IExercisesPayload>;
}

export interface GET_EXERCISES_ERROR {
  type: ActionType.GET_EXERCISES_ERROR;
  payload: IState;
}

export interface REQUEST_CREATE_EXERCISE {
  type: ActionType.REQUEST_CREATE_EXERCISE;
}

export interface CREATE_EXERCISE_SUCCESS {
  type: ActionType.CREATE_EXERCISE_SUCCESS;
  payload: {
    exerciseId: string;
  };
}

export interface CREATE_EXERCISE_ERROR {
  type: ActionType.CREATE_EXERCISE_ERROR;
  payload: IState;
}

export interface CLEAN_ERROR {
  type: ActionType.CLEAN_ERROR;
}

export type ActionTypes =
  | REQUEST_GET_EXERCISES
  | GET_EXERCISES_SUCCESS
  | GET_EXERCISES_ERROR
  | REQUEST_CREATE_EXERCISE
  | CREATE_EXERCISE_SUCCESS
  | CREATE_EXERCISE_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
