import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Menu from '../components/Menu';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import WorkoutSummaryHeader from '../components/WorkoutSummaryHeader';
import WorkoutSummaryExercises from '../components/WorkoutSummaryExercises';
import { useWorkoutDispatch, useWorkoutState } from '../contexts/WorkoutContext';
import { getWorkoutById } from '../actions/WorkoutAction';
import LoadingSpinner from '../components/LoadingSpinner';

interface IWorkoutSummary {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { workoutId: string } }>;
}

const WorkoutSummary: React.FC<IWorkoutSummary> = ({ navigation, route }) => {
  const { workoutId } = route.params;
  const { workoutData, isLoading } = useWorkoutState();

  const dispatch = useWorkoutDispatch();

  useEffect(() => {
    void getWorkoutById(dispatch, workoutId);
  }, [dispatch, workoutId]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <WorkoutSummaryHeader workoutData={workoutData} />
            <Text style={styles.headerText}>Exercies</Text>
            <FlatList
              nestedScrollEnabled
              data={workoutData?.exercises}
              renderItem={({ item }) => <WorkoutSummaryExercises exercisesData={item} />}
              keyExtractor={(item) => item.id}
            />
          </>
        )}
      </View>
      <View style={styles.menuWrapper}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A22',
  },
  wrapper: {
    padding: 15,
    marginTop: 25,
    flex: 1,
  },
  summaryWrapper: {
    backgroundColor: '#2E2C39',
    marginVertical: 15,
    padding: 15,
  },
  menuWrapper: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WorkoutSummary;
