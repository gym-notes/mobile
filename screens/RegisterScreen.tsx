import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import RegisterIndicator from '../components/RegisterIndicator';
import RegisterForm from '../components/RegisterForm';
import Button from '../components/Button';

interface IRegisterScreen {
  navigation: NavigationProp<ParamListBase>;
}

const RegisterScreen: React.FC<IRegisterScreen> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Login details', 'User Profile', 'User Profile'];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button
            title="log in"
            backgroundColor="#2E2C39"
            textColor="#BCBCC0"
            width={100}
            iconName="arrow-left"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up</Text>
        <RegisterIndicator currentStep={currentStep} steps={steps} />
        <RegisterForm steps={steps} setCurrentStep={setCurrentStep} currentStep={currentStep} />
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
  wrapper: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
  headerText: {
    color: '#BCBCC0',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    alignSelf: 'center',
  },
});

export default RegisterScreen;
