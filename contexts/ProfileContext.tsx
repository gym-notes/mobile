import React, { createContext, useContext, useReducer } from 'react';
import { ProfileReducer, initialState } from '../reducers/ProfileReducer';
import { IState, Dispatch } from '../interfaces/ProfileInterface';

const ProfileStateContext = createContext<IState>(initialState);
const ProfileDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useProfileState = () => {
  const context = useContext(ProfileStateContext);
  if (context === undefined) {
    throw new Error('useProfileState must be used within a ProfileProvider');
  }
  return context;
};

export const useProfileDispatch = () => {
  const context = useContext(ProfileDispatchContext);
  if (context === undefined) {
    throw new Error('useProfileDispatch must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider: React.FC = ({ children }) => {
  const [user, dispatch] = useReducer(ProfileReducer, initialState);

  return (
    <ProfileStateContext.Provider value={user}>
      <ProfileDispatchContext.Provider value={dispatch}>{children}</ProfileDispatchContext.Provider>
    </ProfileStateContext.Provider>
  );
};
