import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionType, IState, Dispatch, IResponseMyPlan } from '../interfaces/PlansInterface';

const API_URL = 'http://10.0.2.2:3000/api/plans/';

interface IServerError {
  message: string;
  isLoading: boolean;
}

export const getAllPlans = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_ALL_PLANS });
    const response: AxiosResponse<IState> = await axios.get(API_URL + 'my');
    const data = response.data;

    if (data.plans) {
      dispatch({ type: ActionType.GET_ALL_PLANS_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IServerError>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_ALL_PLANS_ERROR, payload: serverMessages });
    }
  }
};

export const getMyPlan = async (dispatch: Dispatch, id: string) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_MY_PLAN });
    const response: AxiosResponse<IResponseMyPlan> = await axios.get(API_URL + id);
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.GET_MY_PLAN_SUCCESS, payload: data });
    }
    return;
  } catch (err: unknown) {
    const error = err as AxiosError<IServerError>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_MY_PLAN_ERROR, payload: serverMessages });
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};
