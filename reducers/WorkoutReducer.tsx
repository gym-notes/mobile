import { IState, ActionTypes, ActionType } from '../interfaces/WorkoutInterface';

export const initialState: IState = {
  workoutId: '',
  isLoading: false,
  message: null,
};

export const WorkoutReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_CREATE_WORKOUT:
      return {
        ...initialState,
        isLoading: true,
        message: null,
      };
    case ActionType.CREATE_WORKOUT_SUCCESS:
      return {
        ...initialState,
        workoutId: action.payload.workoutId,
        isLoading: false,
      };
    case ActionType.CREATE_WORKOUT_ERROR:
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
