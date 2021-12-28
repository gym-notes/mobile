import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IRegisterIndicator {
  currentStep: number;
  steps: Array<string>;
}

const RegisterIndicator: React.FC<IRegisterIndicator> = ({ currentStep, steps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.lineWrapper}>
          <View style={styles.line} />
        </View>
        <View style={styles.stepsWrapper}>
          {steps.map((label, i) => (
            <View key={i} style={{ alignItems: 'center', width: 100 }}>
              {i > currentStep && i != currentStep /* Not selected */ && (
                <View style={[styles.circle, styles.notSelectedCircle]}>
                  <Text style={styles.notSelectedText}>{i + 1}</Text>
                </View>
              )}
              {i < currentStep /* Checked */ && (
                <View style={[styles.circle, styles.checkedCircle]}>
                  <Ionicons name="md-checkmark" size={20} color="#fff" />
                </View>
              )}
              {i == currentStep /* Selected */ && (
                <View style={[styles.circle, styles.selectedCircle]}>
                  <Text style={styles.selectedText}>{i + 1}</Text>
                </View>
              )}
              <Text style={styles.labelText}>{label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 25,
  },
  wrapper: {
    width: 300,
    height: 70,
  },
  lineWrapper: {
    alignItems: 'center',
  },
  line: {
    height: 2,
    backgroundColor: '#BCBCC0',
    width: 200,
    position: 'absolute',
    top: 14,
    zIndex: 10,
  },
  stepsWrapper: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    zIndex: 20,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: 2,
  },
  notSelectedCircle: {
    backgroundColor: '#1B1A22',
    borderColor: '#2E2C39',
  },
  checkedCircle: {
    backgroundColor: '#0faf9a',
    borderColor: '#0faf9a',
  },
  selectedCircle: {
    backgroundColor: '#2E2C39',
    borderColor: '#2E2C39',
  },
  notSelectedText: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  selectedText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 13,
    color: '#BCBCC0',
    fontWeight: 'bold',
  },
});

export default RegisterIndicator;
