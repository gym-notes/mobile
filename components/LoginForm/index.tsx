import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../Button';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuthDispatch, useAuthState } from '../../contexts/AuthContext';
import { loginUser, cleanErrorMessage } from '../../actions/AuthAction';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ErrorMessage from '../ErrorMessage';

interface ILoginForm {
  navigation: NavigationProp<ParamListBase>;
}

interface IFormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const LoginForm: React.FC<ILoginForm> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) =>
    loginUser(dispatch, { email: data.email, password: data.password }),
  );
  const { message } = useAuthState();

  const dispatch = useAuthDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      cleanErrorMessage(dispatch);
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, dispatch]);
  return (
    <>
      {message && isVisible && <ErrorMessage message={message} />}
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
    </>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    alignItems: 'center',
    flex: 0.5,
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

export default LoginForm;
