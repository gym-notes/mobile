import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  ActionType,
  IState,
  Dispatch,
  ICreateWorkoutPayload,
  IGetWorkoutById,
} from '../interfaces/WorkoutInterface';
import { CREATE_WORKOUT, GET_WORKOUT_BY_ID } from '../helpers/AxiosInterceptors';

export const createWorkout = async (dispatch: Dispatch, workoutPayload: ICreateWorkoutPayload) => {
  try {
    dispatch({ type: ActionType.REQUEST_CREATE_WORKOUT });
    const response: AxiosResponse<IState> = await axios.post(CREATE_WORKOUT, { ...workoutPayload });
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.CREATE_WORKOUT_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.CREATE_WORKOUT_ERROR, payload: serverMessages });
    }
  }
};

export const getWorkoutById = async (dispatch: Dispatch, id: string) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_WORKOUT_BY_ID });
    const response: AxiosResponse<IGetWorkoutById> = await axios.get(GET_WORKOUT_BY_ID + id);
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.GET_WORKOUT_BY_ID_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_WORKOUT_BY_ID_ERROR, payload: serverMessages });
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};