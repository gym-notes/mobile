import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import Logotype from '../components/Logotype';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useAuthDispatch } from '../contexts/AuthContext';
import { loginUser } from '../actions/AuthAction';
import Button from '../components/Button';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) =>
    loginUser(dispatch, { email: data.email, password: data.password }),
  );

  const dispatch = useAuthDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.logotypeWrapper}>
        <Logotype />
      </View>
      <View style={styles.formWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder="email@address.com"
              label="Your Email Address"
              leftIcon={<MaterialIcon name="email" size={30} color="#BCBCC0" />}
              inputStyle={styles.inputStyle}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder="Password"
              label="Type your Password"
              leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
              inputStyle={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
          name="password"
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onSubmit()}>
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
