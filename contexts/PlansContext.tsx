import React, { createContext, useContext, useReducer } from 'react';
import { PlansReducer, initialState } from '../reducers/PlansReducer';
import { IState, Dispatch } from '../interfaces/PlansInterface';

const PlansStateContext = createContext<IState>(initialState);
const PlansDispatchContext = createContext<Dispatch | undefined>(undefined);

export const usePlansState = () => {
  const context = useContext(PlansStateContext);
  if (context === undefined) {
    throw new Error('usePlansState must be used within a PlansProvider');
  }
  return context;
};

export const usePlansDispatch = () => {
  const context = useContext(PlansDispatchContext);
  if (context === undefined) {
    throw new Error('usePlansDispatch must be used within a PlansProvider');
  }
  return context;
};

export const PlansProvider: React.FC = ({ children }) => {
  const [user, dispatch] = useReducer(PlansReducer, initialState);

  return (
    <PlansStateContext.Provider value={user}>
      <PlansDispatchContext.Provider value={dispatch}>{children}</PlansDispatchContext.Provider>
    </PlansStateContext.Provider>
  );
};
