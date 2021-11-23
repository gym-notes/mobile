import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  title: string;
  navigation: NavigationProp<ParamListBase>;
}

const WorkoutItem: React.FC<Props> = ({ title, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('WorkoutScreen')} style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 75,
    backgroundColor: '#2E2C39',
    borderRadius: 10,
    marginVertical: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default WorkoutItem;
