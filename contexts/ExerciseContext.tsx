import React, { createContext, useContext, useReducer } from 'react';
import { ExerciseReducer, initialState } from '../reducers/ExerciseReducer';
import { IState, Dispatch } from '../interfaces/ExerciseInterface';

const ExerciseStateContext = createContext<IState>(initialState);
const ExerciseDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useExerciseState = () => {
  const context = useContext(ExerciseStateContext);
  if (context === undefined) {
    throw new Error('useExerciseState must be used within a ExerciseProvider');
  }
  return context;
};

export const useExerciseDispatch = () => {
  const context = useContext(ExerciseDispatchContext);
  if (context === undefined) {
    throw new Error('useExerciseDispatch must be used within a ExerciseProvider');
  }
  return context;
};

export const ExerciseProvider: React.FC = ({ children }) => {
  const [user, dispatch] = useReducer(ExerciseReducer, initialState);

  return (
    <ExerciseStateContext.Provider value={user}>
      <ExerciseDispatchContext.Provider value={dispatch}>
        {children}
      </ExerciseDispatchContext.Provider>
    </ExerciseStateContext.Provider>
  );
};
