import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, BackHandler } from 'react-native';
import Menu from '../components/Menu';
import { NavigationProp, ParamListBase, RouteProp, useFocusEffect } from '@react-navigation/native';
import WorkoutSummaryHeader from '../components/WorkoutSummaryHeader';
import WorkoutSummaryExercises from '../components/WorkoutSummaryExercises';
import { useWorkoutDispatch, useWorkoutState } from '../contexts/WorkoutContext';
import { usePlansDispatch } from '../contexts/PlansContext';
import { getWorkoutById } from '../actions/WorkoutAction';
import { setPlanId } from '../actions/PlansAction';
import LoadingSpinner from '../components/LoadingSpinner';

interface IWorkoutSummary {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { workoutId: string } }>;
}

const WorkoutSummary: React.FC<IWorkoutSummary> = ({ navigation, route }) => {
  const { workoutId } = route.params;
  const { workoutData, isLoading } = useWorkoutState();

  const workoutDispatch = useWorkoutDispatch();
  const palnsDispatch = usePlansDispatch();

  useEffect(() => {
    void getWorkoutById(workoutDispatch, workoutId);
  }, [workoutDispatch, workoutId]);

  useEffect(() => {
    void setPlanId(palnsDispatch, '');
  }, [palnsDispatch]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

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
              keyExtractor={(item, index) => index.toString()}
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
