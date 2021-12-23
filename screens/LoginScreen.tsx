import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import Logotype from '../components/Logotype';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useAuthDispatch } from '../contexts/AuthContext';
import { loginUser } from '../actions/AuthAction';
import Button from '../components/Button';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAuthDispatch();

  const handleLogin = async () => {
    await loginUser(dispatch, { email, password });
  };

  return (
    <View style={styles.container}>
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
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          placeholder="Password"
          label="Type your Password"
          leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleLogin()}>
          <Button title="Login" backgroundColor="#2E2C39" textColor="#BCBCC0" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Button title="Create account" backgroundColor="#2E2C39" textColor="#BCBCC0" />
        </TouchableOpacity>
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
    marginVertical: 5,
  },
});

export default LoginScreen;
