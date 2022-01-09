import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../components/Button';
import ProfileDropDownPickers from '../../components/ProfileDropDownPickers';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useProfileDispatch, useProfileState } from '../../contexts/ProfileContext';
import { updateProfile, cleanErrorMessage } from '../../actions/ProfileAction';
import ErrorMessage from '../../components/ErrorMessage';

export interface IFormData {
  firstName: string;
  height: string;
  weight: string;
  gender: string;
  birthDate: string;
  country: string;
}

const ProfileForm = () => {
  const schema = yup.object({
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

  const { message } = useProfileState();
  const dispatch = useProfileDispatch();
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) =>
    updateProfile(dispatch, {
      firstName: data.firstName,
      weight: data.weight,
      height: data.height,
      birthDate: data.birthDate,
      gender: data.gender,
      country: data.country,
    }),
  );
  return (
    <>
      {message && isVisible && <ErrorMessage message={message} />}
      <Text style={styles.textStyle}>Edit your profile</Text>
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
            errorMessage={errors.weight?.message}
          />
        )}
        name="weight"
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
            label="Height in cm"
            leftIcon={<FontAwesome5Icon name="ruler-vertical" size={20} color="#BCBCC0" />}
            inputStyle={styles.inputStyle}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.height?.message}
          />
        )}
        name="height"
      />
      <ProfileDropDownPickers control={control} errors={errors} />
      <TouchableOpacity onPress={() => onSubmit()}>
        <Button
          title="Update"
          backgroundColor="#D44E52"
          textColor="white"
          margin={25}
          iconName="account-edit"
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#BCBCC0',
    fontWeight: 'bold',
    marginVertical: 15,
    fontSize: 16,
  },
  inputLabelStyle: {
    color: '#BCBCC0',
  },
  inputContainerStyle: {
    minWidth: '90%',
  },
  inputStyle: {
    color: '#BCBCC0',
  },
});

export default ProfileForm;
