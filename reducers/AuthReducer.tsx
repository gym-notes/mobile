import { IState, ActionTypes, ActionType } from '../interfaces/AuthInterface';

export const initialState: IState = {
  token: '',
  isLoading: false,
  message: null,
};

export const AuthReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_LOGIN:
      return {
        ...initialState,
        isLoading: true,
        message: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...initialState,
        token: action.payload.token,
        isLoading: false,
      };
    case ActionType.LOGOUT:
      return {
        ...initialState,
        token: '',
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: action.payload.message,
      };
    case ActionType.REQUEST_REGISTER:
      return {
        ...initialState,
        isLoading: true,
        message: null,
      };
    case ActionType.REGISTER_SUCCESS:
      return {
        ...initialState,
        token: action.payload.token,
        isLoading: false,
      };
    case ActionType.REGISTER_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: action.payload.message,
      };
    case ActionType.CLEAN_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: null,
      };

    default:
      throw new Error('Unhandled action type');
  }
};
