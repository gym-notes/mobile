import React, { useEffect } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import LastWorkoutItem from './LastWorkoutItem';
import { useWorkoutDispatch, useWorkoutState } from '../../contexts/WorkoutContext';
import { getLatestWorkout } from '../../actions/WorkoutAction';
import LoadingSpinner from '../LoadingSpinner';

const LastWorkoutPanel = () => {
  const disptach = useWorkoutDispatch();
  const { latestWorkout, isLoading } = useWorkoutState();

  useEffect(() => {
    void getLatestWorkout(disptach);
  }, [disptach]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Text style={styles.textStyle}>
            {latestWorkout.name} - {latestWorkout.date}
          </Text>
          <FlatList
            data={latestWorkout.exercises}
            renderItem={({ item }) => <LastWorkoutItem data={item} />}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2C39',
    borderRadius: 10,
    minWidth: '90%',
    height: 200,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    marginVertical: 10,
  },
});

export default LastWorkoutPanel;
