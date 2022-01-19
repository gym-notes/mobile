import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionType, IState, Dispatch, IExercisesPayload } from '../interfaces/ExerciseInterface';
import { GET_EXERCISES, CREATE_EXERCISE } from '../helpers/AxiosInterceptors';

export const getExercises = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_EXERCISES });
    const response: AxiosResponse<Array<IExercisesPayload>> = await axios.get(GET_EXERCISES);
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.GET_EXERCISES_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_EXERCISES_ERROR, payload: serverMessages });
    }
  }
};

export const createExercise = async (dispatch: Dispatch, payload: string) => {
  try {
    dispatch({ type: ActionType.REQUEST_CREATE_EXERCISE });
    const response: AxiosResponse<{ exerciseId: string }> = await axios.post(CREATE_EXERCISE, {
      name: payload,
    });
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.CREATE_EXERCISE_SUCCESS, payload: data });
      return data;
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.CREATE_EXERCISE_ERROR, payload: serverMessages });
      return serverMessages;
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};
