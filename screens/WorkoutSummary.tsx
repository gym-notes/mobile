import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import WorkoutSummaryHeader from '../components/WorkoutSummaryHeader';
import WorkoutSummaryExercises from '../components/WorkoutSummaryExercises';

interface IWorkoutSummary {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { workoutId: string } }>;
}

const WorkoutSummary: React.FC<IWorkoutSummary> = ({ navigation, route }) => {
  const { workoutId } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <WorkoutSummaryHeader />
        <Text style={styles.headerText}>Exercies</Text>
        <ScrollView>
          <WorkoutSummaryExercises />
        </ScrollView>
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
  },
  summaryWrapper: {
    backgroundColor: '#2E2C39',
    marginVertical: 15,
    padding: 15,
  },
  menuWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WorkoutSummary;
