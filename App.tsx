import React from 'react';
import RootNavigation from './routes/RootNavigation';
import { StatusBar } from 'react-native';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#1B1A22" barStyle="light-content" />
      <RootNavigation />
    </AuthProvider>
  );
};

export default App;
