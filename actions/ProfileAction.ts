import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  ActionType,
  IState,
  Dispatch,
  profileInformationPayload,
} from '../interfaces/ProfileInterface';
import { GET_PROFILE } from '../helpers/AxiosInterceptors';

export const getProfile = async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionType.REQUEST_GET_PROFILE });
    const response: AxiosResponse<profileInformationPayload> = await axios.get(GET_PROFILE);
    const data = response.data;

    if (data) {
      dispatch({ type: ActionType.GET_PROFILE_SUCCESS, payload: data });
    }
  } catch (err: unknown) {
    const error = err as AxiosError<IState>;

    if (error.response) {
      const serverMessages = error.response.data;
      dispatch({ type: ActionType.GET_PROFILE_ERROR, payload: serverMessages });
    }
  }
};

export const cleanErrorMessage = (dispatch: Dispatch) => {
  dispatch({ type: ActionType.CLEAN_ERROR });
};
