import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
}

const PlanItem: React.FC<Props> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2C39',
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginVertical: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PlanItem;
