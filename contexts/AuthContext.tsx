import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthReducer, initialState } from '../reducers/AuthReducer';
import { IState, Dispatch } from '../interfaces/AuthInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthStateContext = createContext<IState>(initialState);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const setToken = async () => {
      try {
        if (user.token) {
          await AsyncStorage.setItem('token', user.token);
        }
      } catch (error) {
        await Promise.reject(error);
      }
    };

    void setToken();
  }, [user.token]);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
