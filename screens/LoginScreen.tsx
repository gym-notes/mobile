import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logotype from '../components/Logotype';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import LoginForm from '../components/LoginForm';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logotypeWrapper}>
        <Logotype />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1B1A22',
  },
  logotypeWrapper: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 30,
  },
});

export default LoginScreen;
