import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionType, IState, Dispatch } from '../interfaces/AuthInterface';

const API_URL = 'http://10.0.2.2:3000/api/auth/login';

interface ILoginPayload {
  email: string;
  password: string;
}

interface IServerError {
  message: string;
}

export const loginUser = async (dispatch: Dispatch, loginPayload: ILoginPayload) => {
  try {
    dispatch({ type: ActionType.REQUEST_LOGIN });
    const response: AxiosResponse<IState> = await axios.post(API_URL, { ...loginPayload });
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
