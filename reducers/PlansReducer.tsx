import { IState, ActionTypes, ActionType } from '../interfaces/PlansInterface';

export const initialState: IState = {
  plans: null,
  isLoading: false,
};

export const AuthReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_GET_MY_PLANS:
      return {
        ...initialState,
        isLoading: true,
        message: null,
      };
    case ActionType.GET_MY_PLANS_SUCCESS:
      return {
        ...initialState,
        plans: action.payload.plans,
        isLoading: false,
      };
    case ActionType.GET_MY_PLANS_ERROR:
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
