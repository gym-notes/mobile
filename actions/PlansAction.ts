import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionType, IState, Dispatch } from '../interfaces/PlansInterface';

const API_URL = 'http://10.0.2.2:3000/api/plans/';

interface IServerError {
  message: string;
  isLoading: boolean;
}

export const getMyPlans = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_MY_PLANS });
    const response: AxiosResponse<IState> = await axios.get(API_URL + 'my');
    const data = response.data;

    if (data.plans) {
      dispatch({ type: ActionType.GET_MY_PLANS_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IServerError>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_MY_PLANS_ERROR, payload: serverMessages });
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};
