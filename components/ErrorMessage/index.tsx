import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IErrorMessage {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#D44E52',
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default ErrorMessage;
