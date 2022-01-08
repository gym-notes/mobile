import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { IExercisesById } from '../../interfaces/WorkoutInterface';
import WorkoutSummarySetsItem from '../WorkoutSummarySetsItem';

interface IWorkoutSummaryExercises {
  exercisesData: IExercisesById;
}

const WorkoutSummaryExercises: React.FC<IWorkoutSummaryExercises> = ({ exercisesData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText}>{exercisesData.name.toUpperCase()}</Text>
      </View>
      <FlatList
        nestedScrollEnabled
        data={exercisesData?.sets}
        renderItem={({ item }) => <WorkoutSummarySetsItem setsData={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
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
