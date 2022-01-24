import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  ActionType,
  IState,
  Dispatch,
  IResponseMyPlan,
  IResponseCreatePlan,
} from '../interfaces/PlansInterface';
import {
  GET_MY_PLAN_URL,
  GET_ALL_PLANS_URL,
  CREATE_PLAN,
  DELETE_PLAN,
} from '../helpers/AxiosInterceptors';

export const getAllPlans = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_ALL_PLANS });
    const response: AxiosResponse<IState> = await axios.get(GET_ALL_PLANS_URL);
    const data = response.data;

    dispatch({ type: ActionType.GET_ALL_PLANS_SUCCESS, payload: data });
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_ALL_PLANS_ERROR, payload: serverMessages });
    }
  }
};

export const getMyPlan = async (dispatch: Dispatch, id: string) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_MY_PLAN });
    const response: AxiosResponse<IResponseMyPlan> = await axios.get(GET_MY_PLAN_URL + id);
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.GET_MY_PLAN_SUCCESS, payload: data });
    }
    return;
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_MY_PLAN_ERROR, payload: serverMessages });
    }
  }
};

export const createPlan = async (dispatch: Dispatch, planPayload: IResponseCreatePlan) => {
  try {
    dispatch({ type: ActionType.REQUEST_CREATE_MY_PLAN });
    const response: AxiosResponse<IResponseCreatePlan> = await axios.post(CREATE_PLAN, {
      ...planPayload,
    });

    dispatch({ type: ActionType.CREATE_MY_PLAN_SUCCESS });
    return response;
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.CREATE_MY_PLAN_ERROR, payload: serverMessages });
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};

export const setPlanId = (dispatch: Dispatch, planId: string) => {
  dispatch({ type: ActionType.SET_PLAN_ID, payload: planId });
};

export const deletePlan = async (dispatch: Dispatch, id: string) => {
  try {
    dispatch({ type: ActionType.REQUEST_DELETE_PLAN });
    const response: AxiosResponse<IResponseCreatePlan> = await axios.delete(DELETE_PLAN + id);

    dispatch({ type: ActionType.DELETE_PLAN_SUCCESS });
    return response;
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.CREATE_MY_PLAN_ERROR, payload: serverMessages });
    }
  }
};
