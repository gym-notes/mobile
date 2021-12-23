import { IState, ActionTypes, ActionType } from '../interfaces/AuthInterface';

export const initialState: IState = {
  token: '',
  loading: false,
  message: null,
};

export const AuthReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...initialState,
        token: action.payload.token,
        loading: false,
      };
    case ActionType.LOGOUT:
      return {
        ...initialState,
        token: '',
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...initialState,
        loading: false,
        message: action.payload.message,
      };

    default:
      throw new Error('Unhandled action type');
  }
};
