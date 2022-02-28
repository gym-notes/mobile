import { IState, ActionTypes, ActionType } from '../interfaces/PlansInterface';

export const initialState: IState = {
  plans: [],
  isLoading: false,
  myPlan: null,
  planId: '',
  isSuccess: false,
  isDelete: false,
  message: '',
};

export const PlansReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_GET_ALL_PLANS:
      return {
        ...initialState,
        isLoading: true,
        isSuccess: false,
        message: null,
      };
    case ActionType.GET_ALL_PLANS_SUCCESS:
      return {
        ...initialState,
        plans: action.payload.plans,
        isLoading: false,
      };
    case ActionType.GET_ALL_PLANS_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: action.payload.message,
      };
    case ActionType.REQUEST_GET_MY_PLAN:
      return {
        ...initialState,
        isLoading: true,
        isSuccess: false,
        message: null,
      };
    case ActionType.GET_MY_PLAN_SUCCESS:
      return {
        ...initialState,
        myPlan: action.payload,
        isLoading: false,
      };
    case ActionType.GET_MY_PLAN_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: action.payload.message,
      };
    case ActionType.REQUEST_CREATE_MY_PLAN:
      return {
        ...initialState,
        isLoading: true,
        isSuccess: false,
        message: null,
      };
    case ActionType.CREATE_MY_PLAN_SUCCESS:
      return {
        ...initialState,
        isSuccess: true,
        isLoading: false,
      };
    case ActionType.CREATE_MY_PLAN_ERROR:
      return {
        ...initialState,
        isLoading: false,
        isSuccess: false,
        message: action.payload.errors,
      };
    case ActionType.CLEAN_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: null,
      };
    case ActionType.REQUEST_DELETE_PLAN:
      return {
        ...initialState,
        isDelete: true,
        message: null,
      };
    case ActionType.DELETE_PLAN_SUCCESS:
      return {
        ...initialState,
        isDelete: false,
      };
    case ActionType.DELETE_PLAN_ERROR:
      return {
        ...initialState,
        isDelete: false,
        message: action.payload.errors,
      };
    case ActionType.SET_PLAN_ID:
      return {
        ...initialState,
        planId: action.payload,
      };

    default:
      throw new Error('Unhandled action type');
  }
};
