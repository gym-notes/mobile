import { IState, ActionTypes, ActionType } from '../interfaces/PlansInterface';

export const initialState: IState = {
  plans: null,
  loading: false,
};

export const AuthReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_GET_MY_PLANS:
      return {
        ...initialState,
        loading: true,
        message: null,
      };
    case ActionType.GET_MY_PLANS_SUCCESS:
      return {
        ...initialState,
        plans: action.payload.plans,
        loading: false,
      };
    case ActionType.GET_MY_PLANS_ERROR:
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
