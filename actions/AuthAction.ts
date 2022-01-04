import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionType, IState, Dispatch } from '../interfaces/AuthInterface';
import { LOGIN_URL, REGISTER_URL } from '../helpers/AxiosInterceptors';

interface ILoginPayload {
  email: string;
  password: string;
}

interface IRegisterPayload {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  weight: string;
  height: string;
  birthDate: string;
  gender: string;
  country: string;
}

interface IServerError {
  message: string;
  loading: boolean;
}

export const loginUser = async (dispatch: Dispatch, loginPayload: ILoginPayload) => {
  try {
    dispatch({ type: ActionType.REQUEST_LOGIN });
    const response: AxiosResponse<IState> = await axios.post(LOGIN_URL, {
      ...loginPayload,
    });
    const data = response.data;

    if (data.token) {
      dispatch({ type: ActionType.LOGIN_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IServerError>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.LOGIN_ERROR, payload: serverMessages });
    }
  }
};

export const registerUser = async (dispatch: Dispatch, registerPayload: IRegisterPayload) => {
  try {
    dispatch({ type: ActionType.REQUEST_REGISTER });
    const response: AxiosResponse<IState> = await axios.post(REGISTER_URL, {
      ...registerPayload,
    });
    const data = response.data;
    if (data.token) {
      dispatch({ type: ActionType.REGISTER_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IServerError>;
    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.REGISTER_ERROR, payload: serverMessages });
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};
