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
        message: null,
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
    case ActionType.REQUEST_REGISTER:
      return {
        ...initialState,
        loading: true,
        message: null,
      };
    case ActionType.REGISTER_SUCCESS:
      return {
        ...initialState,
        token: action.payload.token,
        loading: false,
      };
    case ActionType.REGISTER_ERROR:
      return {
        ...initialState,
        loading: false,
        message: action.payload.message,
      };
    case ActionType.CLEAN_ERROR:
      return {
        ...initialState,
        loading: false,
        message: null,
      };

    default:
      throw new Error('Unhandled action type');
  }
};
