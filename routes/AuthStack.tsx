import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={{ animation: 'slide_from_right' }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ animation: 'slide_from_right' }}
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
