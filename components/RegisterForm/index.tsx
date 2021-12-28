import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPickers from '../DropDownPickers';
import RegisterFormButtons from '../RegisterFormButtons';

interface IRegisterForm {
  currentStep: number;
  steps: Array<string>;
  setCurrentStep: (arg: number) => void;
}

const RegisterForm: React.FC<IRegisterForm> = ({ currentStep, steps, setCurrentStep }) => {
  const [valueDate, setValueDate] = useState(null);
  const [valueGender, setValueGender] = useState(null);
  const [valueCountry, setValueCountry] = useState(null);

  return (
    <>
      {currentStep == 0 && (
        <View style={{ marginVertical: 15 }}>
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="email@address.com"
            label="Type Your Email Address"
            leftIcon={<MaterialIcon name="email" size={30} color="#BCBCC0" />}
            inputStyle={styles.inputStyle}
          />
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Password"
            label="Type Your Password"
            leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
            inputStyle={styles.inputStyle}
            secureTextEntry={true}
          />
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Password"
            label="Repeat Your Password"
            leftIcon={<MaterialIcon name="lock" size={30} color="#BCBCC0" />}
            inputStyle={styles.inputStyle}
            secureTextEntry={true}
          />
        </View>
      )}
      {currentStep == 1 && (
        <View style={{ marginVertical: 15 }}>
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Joe"
            label="Your First Name"
            leftIcon={<FontAwesome5Icon name="user-alt" size={20} color="#BCBCC0" />}
            inputStyle={styles.inputStyle}
          />
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Type your weight"
            label="Weight in kg"
            leftIcon={<FontAwesome5Icon name="weight-hanging" size={20} color="#BCBCC0" />}
            inputStyle={styles.inputStyle}
          />
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="Type your height"
            label="Height in cm"
            leftIcon={<FontAwesome5Icon name="ruler-vertical" size={20} color="#BCBCC0" />}
            inputStyle={styles.inputStyle}
          />
        </View>
      )}
      {currentStep == 2 && (
        <View style={{ marginVertical: 15 }}>
          <DropDownPickers
            valueCountry={valueCountry}
            valueDate={valueDate}
            valueGender={valueGender}
            setValueCountry={setValueCountry}
            setValueDate={setValueDate}
            setValueGender={setValueGender}
          />
        </View>
      )}
      <RegisterFormButtons
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
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
