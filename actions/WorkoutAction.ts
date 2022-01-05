import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionType, IState, Dispatch, IWorkoutPayload } from '../interfaces/WorkoutInterface';
import { CREATE_WORKOUT } from '../helpers/AxiosInterceptors';

interface IServerError {
  message: string;
  isLoading: boolean;
}

export const createWorkout = async (dispatch: Dispatch, workoutPayload: IWorkoutPayload) => {
  try {
    dispatch({ type: ActionType.REQUEST_CREATE_WORKOUT });
    const response: AxiosResponse<IState> = await axios.post(CREATE_WORKOUT, { ...workoutPayload });
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.CREATE_WORKOUT_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IServerError>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.CREATE_WORKOUT_ERROR, payload: serverMessages });
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};
