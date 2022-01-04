import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../Button';

interface IRegisterFormButtons {
  steps: Array<string>;
  currentStep: number;
  setCurrentStep: (arg: number) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const RegisterFormButtons: React.FC<IRegisterFormButtons> = ({
  currentStep,
  setCurrentStep,
  steps,
  onSubmit,
  isLoading,
}) => {
  return (
    <View style={styles.buttonsWrapper}>
      {currentStep > 0 ? (
        <TouchableOpacity
          style={[
            styles.centerElement,
            {
              bottom: 10,
              left: 10,
            },
          ]}
          onPress={() => {
            if (currentStep > 0) {
              setCurrentStep(currentStep - 1);
            }
          }}>
          <Button
            title="Back"
            textColor="#BCBCC0"
            backgroundColor="#2E2C39"
            width={100}
            iconName="arrow-left"
          />
        </TouchableOpacity>
      ) : (
        <Text> </Text>
      )}
      {currentStep + 1 < steps.length && (
        <TouchableOpacity
          style={[
            styles.centerElement,
            {
              bottom: 10,
              right: 10,
            },
          ]}
          onPress={() => {
            if (currentStep + 1 < steps.length) {
              setCurrentStep(currentStep + 1);
            }
          }}>
          <Button
            title="Next"
            textColor="#BCBCC0"
            backgroundColor="#2E2C39"
            width={100}
            iconName="arrow-right"
            iconRight
          />
        </TouchableOpacity>
      )}
      {currentStep + 1 == steps.length && (
        <TouchableOpacity
          disabled={isLoading}
          style={[
            styles.centerElement,
            {
              bottom: 10,
              right: 10,
            },
          ]}
          onPress={() => {
            onSubmit();
          }}>
          <Button
            loading={isLoading}
            title="Finish"
            textColor="#BCBCC0"
            backgroundColor="#2E2C39"
            width={100}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centerElement: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    flex: 1,
  },
});

export default RegisterFormButtons;
