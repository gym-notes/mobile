import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SelectWorkoutScreen from './screens/SelectWorkoutScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import PlansScreen from './screens/PlansScreen';
import HistoryScreen from './screens/HistoryScreen';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
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
        <Stack.Screen
          options={{ animation: 'slide_from_right' }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ animation: 'slide_from_right' }}
          name="SelectWorkoutScreen"
          component={SelectWorkoutScreen}
        />
        <Stack.Screen
          options={{ animation: 'slide_from_right' }}
          name="WorkoutScreen"
          component={WorkoutScreen}
        />
        <Stack.Screen
          options={{ animation: 'slide_from_right' }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ animation: 'slide_from_right' }}
          name="ProfileEditScreen"
          component={ProfileEditScreen}
        />
        <Stack.Screen
          options={{ animation: 'slide_from_left' }}
          name="PlansScreen"
          component={PlansScreen}
        />
        <Stack.Screen
          options={{ animation: 'slide_from_left' }}
          name="HistoryScreen"
          component={HistoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
