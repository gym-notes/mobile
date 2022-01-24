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
      ) : latestWorkout ? (
        <>
          <Text style={styles.textStyle}>
            {latestWorkout.name} - {latestWorkout.date}
          </Text>
          <FlatList
            data={latestWorkout.exercises}
            renderItem={({ item }) => <LastWorkoutItem data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      ) : (
        <View style={styles.warningWrapper}>
          <Text style={styles.warningText}>
            You haven not finished any training {String.fromCodePoint(0x1f62c)}
          </Text>
        </View>
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
  warningWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningText: { color: 'white' },
});

export default LastWorkoutPanel;
