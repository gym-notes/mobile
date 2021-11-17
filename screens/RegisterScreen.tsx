import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Logotype from '../components/Logotype';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
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
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          placeholder="Password"
          label="Type your Password"
          leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
        />
        <Input
          containerStyle={styles.inputContainerStyle}
          placeholder="Password"
          label="Repeat your Password"
          leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
        />
        <Button
          title="Create Account"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{ color: 'white', marginVertical: 10 }}>
            Already have an account?{' '}
            <Text style={{ fontWeight: 'bold', color: '#D44E52' }}>Log In</Text>
          </Text>
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
    flex: 2,
    justifyContent: 'flex-end',
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

export default RegisterScreen;
