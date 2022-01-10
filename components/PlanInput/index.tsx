import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const PlanInput = () => {
  return (
    <Input
      containerStyle={styles.inputContainerStyle}
      placeholder="example: FBW - 1"
      label="Plan Name"
      leftIcon={<FontAwesomeIcon name="dumbbell" size={20} color="#BCBCC0" />}
      inputStyle={styles.inputStyle}
      labelStyle={{ color: 'white', textAlign: 'center', fontSize: 18 }}
      placeholderTextColor="#BCBCC0"
      inputContainerStyle={{ borderColor: 'white' }}
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
