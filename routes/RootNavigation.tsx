import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuthState } from '../contexts/AuthContext';

const RootNavigation = () => {
  const { token } = useAuthState();

  return <NavigationContainer>{token ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default RootNavigation;
