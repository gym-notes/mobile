import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import RegisterDropDownPickers from '../RegisterDropDownPickers';
import RegisterFormButtons from '../RegisterFormButtons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../ErrorMessage';
import { useAuthDispatch, useAuthState } from '../../contexts/AuthContext';
import { registerUser, cleanErrorMessage } from '../../actions/AuthAction';

interface IRegisterForm {
  currentStep: number;
  steps: Array<string>;
  setCurrentStep: (arg: number) => void;
}

export interface IFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  height: string;
  weight: string;
  gender: string;
  birthDate: string;
  country: string;
}

const RegisterForm: React.FC<IRegisterForm> = ({ currentStep, steps, setCurrentStep }) => {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      )
      .required(),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
    firstName: yup
      .string()
      .required('First Name is required')
      .min(2)
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    height: yup
      .number()
      .typeError('You must specify a number')
      .required('Height is required')
      .min(50, 'Must be more than 50'),
    weight: yup
      .number()
      .typeError('You must specify a number')
      .required('Weight is required')
      .min(20, 'Must be more than 20'),
    gender: yup.string().required('Gender is required'),
    birthDate: yup.string().required('Date of birth is required').nullable(),
    country: yup.string().required('Country is required').nullable(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAuthDispatch();
  const { message, isLoading } = useAuthState();

  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = handleSubmit((data) =>
    registerUser(dispatch, {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      firstName: data.firstName,
      weight: data.weight,
      height: data.height,
      birthDate: data.birthDate,
      gender: data.gender,
      country: data.country,
    }),
  );

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
      {currentStep == 0 && (
        <View style={{ marginVertical: 15 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                containerStyle={styles.inputContainerStyle}
                placeholder="email@address.com"
                label="Type Your Email Address"
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
                label="Type Your Password"
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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                containerStyle={styles.inputContainerStyle}
                placeholder="Password"
                label="Repeat Your Password"
                leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
                inputStyle={styles.inputStyle}
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
            name="confirmPassword"
          />
        </View>
      )}
      {currentStep == 1 && (
        <View style={{ marginVertical: 15 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                containerStyle={styles.inputContainerStyle}
                placeholder="Joe"
                label="Your First Name"
                leftIcon={<FontAwesome5Icon name="user-alt" size={20} color="#BCBCC0" />}
                inputStyle={styles.inputStyle}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.firstName?.message}
              />
            )}
            name="firstName"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                containerStyle={styles.inputContainerStyle}
                placeholder="Type your weight"
                label="Weight in kg"
                leftIcon={<FontAwesome5Icon name="weight-hanging" size={20} color="#BCBCC0" />}
                inputStyle={styles.inputStyle}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.height?.message}
              />
            )}
            name="height"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                containerStyle={styles.inputContainerStyle}
                placeholder="Type your height"
                label="Weight in cm"
                leftIcon={<FontAwesome5Icon name="ruler-vertical" size={20} color="#BCBCC0" />}
                inputStyle={styles.inputStyle}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.weight?.message}
              />
            )}
            name="weight"
          />
        </View>
      )}
      {currentStep == 2 && (
        <View style={{ marginVertical: 15 }}>
          {Object.keys(errors).length !== 0 && (
            <ErrorMessage message="The form was completed incorrectly." />
          )}
          {message && isVisible && <ErrorMessage message={message} />}
          <RegisterDropDownPickers control={control} errors={errors} />
        </View>
      )}
      <RegisterFormButtons
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    minWidth: '90%',
  },
  inputStyle: {
    color: '#BCBCC0',
  },
});

export default RegisterForm;
