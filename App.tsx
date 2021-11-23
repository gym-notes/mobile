import React from 'react';
import RootNavigation from './RootNavigation';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#1B1A22" barStyle="light-content" />
      <RootNavigation />
    </>
  );
};

export default App;
