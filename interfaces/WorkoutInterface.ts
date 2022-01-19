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
  workoutsHistory: Array<IWorkoutsHistoryPayload>;
  latestWorkout: ILatestWorkout | null;
}

export interface ILatestWorkout {
  id: string;
  name: string;
  duration: number;
  date: string;
  exercises: Array<IExercisesById>;
}

export interface IWorkoutsHistoryPayload {
  year: number;
  month: number;
  workouts: Array<IWorkoutsHistory>;
}

interface IWorkoutsHistory {
  id: string;
  planName: string;
  duration: number;
  exercisesNumber: number;
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
  REQUEST_GET_WORKOUTS_HISTORY = 'REQUEST_GET_WORKOUTS_HISTORY',
  GET_WORKOUTS_HISTORY_SUCCESS = 'GET_WORKOUTS_HISTORY_SUCCESS',
  GET_WORKOUTS_HISTORY_ERROR = 'GET_WORKOUTS_HISTORY_ERROR',
  REQUEST_GET_LATEST_WORKOUT = 'REQUEST_GET_LATEST_WORKOUT',
  GET_LATEST_WORKOUT_SUCCESS = 'GET_LATEST_WORKOUT_SUCCESS',
  GET_LATEST_WORKOUT_ERROR = 'GET_WORKOUTS_HISTORY_ERROR',
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

export interface REQUEST_GET_WORKOUTS_HISTORY {
  type: ActionType.REQUEST_GET_WORKOUTS_HISTORY;
}

export interface GET_WORKOUTS_HISTORY_SUCCESS {
  type: ActionType.GET_WORKOUTS_HISTORY_SUCCESS;
  payload: Array<IWorkoutsHistoryPayload>;
}

export interface GET_WORKOUTS_HISTORY_ERROR {
  type: ActionType.GET_WORKOUTS_HISTORY_ERROR;
  payload: IState;
}

export interface REQUEST_GET_LATEST_WORKOUT {
  type: ActionType.REQUEST_GET_LATEST_WORKOUT;
}

export interface GET_LATEST_WORKOUT_SUCCESS {
  type: ActionType.GET_LATEST_WORKOUT_SUCCESS;
  payload: ILatestWorkout;
}

export interface GET_LATEST_WORKOUT_ERROR {
  type: ActionType.GET_LATEST_WORKOUT_ERROR;
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
  | REQUEST_GET_WORKOUTS_HISTORY
  | GET_WORKOUTS_HISTORY_SUCCESS
  | GET_WORKOUTS_HISTORY_ERROR
  | REQUEST_GET_LATEST_WORKOUT
  | GET_LATEST_WORKOUT_SUCCESS
  | GET_LATEST_WORKOUT_ERROR
  | CLEAN_ERROR;

export type Dispatch = (action: ActionTypes) => void;
