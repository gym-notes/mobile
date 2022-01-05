import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const WorkoutSummaryExercises = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText}>Deadlift</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.center}>
          <Text>1 series</Text>
          <Text>load: 120kg</Text>
          <Text>repeats: 6</Text>
        </View>
        <Divider width={1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  headerTextWrapper: {
    backgroundColor: '#2E2C39',
    padding: 15,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  wrapper: {
    backgroundColor: 'white',
    padding: 15,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default WorkoutSummaryExercises;
