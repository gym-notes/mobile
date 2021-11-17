import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button } from 'react-native-elements';
import Logotype from '../components/Logotype';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1B1A22" barStyle="light-content" />
      <View style={styles.logotypeWrapper}>
        <Logotype />
      </View>
      <View style={styles.formWrapper}>
        <Input
          containerStyle={styles.inputContainerStyle}
          placeholder="email@address.com"
          label="Your Email Address"
          leftIcon={<MaterialIcon name="email" size={30} color="#BCBCC0" />}
          inputStyle={styles.inputStyle}
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          placeholder="Password"
          label="Type your Password"
          leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
        />
        <Button
          title="Login"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
        <Button
          title="Create account"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
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
  formWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  inputContainerStyle: {
    minWidth: '90%',
  },
  inputStyle: {
    color: '#BCBCC0',
  },
  buttonStyle: {
    minWidth: '90%',
    backgroundColor: '#2E2C39',
    marginVertical: 5,
  },
  buttonTitleStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default LoginScreen;
