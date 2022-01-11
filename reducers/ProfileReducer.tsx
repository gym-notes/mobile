import { IState, ActionTypes, ActionType } from '../interfaces/ProfileInterface';

export const initialState: IState = {
  isLoading: false,
  message: null,
  isSuccess: false,
  profileInformation: {
    email: '',
    data: {
      firstName: 'string',
      height: 0,
      weight: 0,
      birthDate: 'string',
      gender: 'string',
      country: 'string',
    },
  },
};

export const ProfileReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_GET_PROFILE:
      return {
        ...initialState,
        isLoading: true,
        message: null,
        isSuccess: false,
      };
    case ActionType.GET_PROFILE_SUCCESS:
      return {
        ...initialState,
        profileInformation: action.payload,
        isLoading: false,
      };
    case ActionType.GET_PROFILE_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: action.payload.message,
      };
    case ActionType.REQUEST_UPDATE_PROFILE:
      return {
        ...initialState,
        isLoading: true,
        message: null,
      };
    case ActionType.UPDATE_PROFILE_SUCCESS:
      return {
        ...initialState,
        isSuccess: true,
        isLoading: false,
      };
    case ActionType.UPDATE_PROFILE_ERROR:
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
