import React, { createContext, useContext, useReducer } from 'react';
import { WorkoutReducer, initialState } from '../reducers/WorkoutReducer';
import { IState, Dispatch } from '../interfaces/WorkoutInterface';

const WorkoutStateContext = createContext<IState>(initialState);
const WorkoutDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useWorkoutState = () => {
  const context = useContext(WorkoutStateContext);
  if (context === undefined) {
    throw new Error('useWorkoutState must be used within a WorkoutProvider');
  }
  return context;
};

export const useWorkoutDispatch = () => {
  const context = useContext(WorkoutDispatchContext);
  if (context === undefined) {
    throw new Error('useWorkoutDispatch must be used within a WorkoutProvider');
  }
  return context;
};

export const WorkoutProvider: React.FC = ({ children }) => {
  const [user, dispatch] = useReducer(WorkoutReducer, initialState);

  return (
    <WorkoutStateContext.Provider value={user}>
      <WorkoutDispatchContext.Provider value={dispatch}>{children}</WorkoutDispatchContext.Provider>
    </WorkoutStateContext.Provider>
  );
};
