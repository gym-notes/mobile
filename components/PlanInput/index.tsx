import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { IFormData } from '../../screens/CreatePlanScreen';

interface IPlanInput {
  control: Control<IFormData>;
  errors: FieldErrors<IFormData>;
}

const PlanInput: React.FC<IPlanInput> = ({ control, errors }) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, value } }) => (
        <Input
          containerStyle={styles.inputContainerStyle}
          placeholder="example: FBW - 1"
          label="Plan Name"
          leftIcon={<FontAwesomeIcon name="dumbbell" size={20} color="#BCBCC0" />}
          inputStyle={styles.inputStyle}
          labelStyle={{ color: 'white', textAlign: 'center', fontSize: 18 }}
          placeholderTextColor="#BCBCC0"
          inputContainerStyle={{ borderColor: 'white' }}
          onChangeText={onChange}
          value={value}
          errorMessage={errors.PlanName?.message}
          errorStyle={{ color: '#D44E52' }}
        />
      )}
      name="PlanName"
    />
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    minWidth: '90%',
  },
  inputStyle: {
    color: '#BCBCC0',
  },
  inputLabelStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default PlanInput;
