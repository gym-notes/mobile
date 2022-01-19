import { IState, ActionTypes, ActionType } from '../interfaces/ExerciseInterface';

export const initialState: IState = {
  isLoading: false,
  message: null,
  exercises: [{ id: '', name: '' }],
  exerciseId: '',
};

export const ExerciseReducer = (initialState: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.REQUEST_GET_EXERCISES:
      return {
        ...initialState,
        isLoading: true,
        message: null,
      };
    case ActionType.GET_EXERCISES_SUCCESS:
      return {
        ...initialState,
        exercises: action.payload,
        isLoading: false,
      };
    case ActionType.GET_EXERCISES_ERROR:
      return {
        ...initialState,
        isLoading: false,
        message: action.payload.message,
      };
    case ActionType.REQUEST_CREATE_EXERCISE:
      return {
        ...initialState,
        isLoading: true,
        message: null,
      };
    case ActionType.CREATE_EXERCISE_SUCCESS:
      return {
        ...initialState,
        exerciseId: action.payload.exerciseId,
        isLoading: false,
      };
    case ActionType.CREATE_EXERCISE_ERROR:
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
