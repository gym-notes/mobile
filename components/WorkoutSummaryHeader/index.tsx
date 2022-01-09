import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IGetWorkoutById } from '../../interfaces/WorkoutInterface';

interface IWorkoutSummaryHeader {
  workoutData: IGetWorkoutById;
}

const WorkoutSummaryHeader: React.FC<IWorkoutSummaryHeader> = ({ workoutData }) => {
  const getSumOfSets = () => {
    const setsValue = workoutData?.exercises.map((item) => item.sets.length);
    const reducer = (accumulator: number, curr: number) => accumulator + curr;
    return setsValue?.reduce(reducer);
  };

  const getSumOfExercises = () => {
    const exerciesValue = workoutData?.exercises.length;
    return exerciesValue;
  };

  const convertSeconds = (seconds: number) => {
    if (seconds) {
      const convertedSeconds = new Date(seconds * 1000).toISOString().substr(11, 8);
      return convertedSeconds;
    }
    return 0;
  };

  const sets = getSumOfSets();
  const exercises = getSumOfExercises();

  return (
    <>
      <Text style={styles.headerText}>Workout summary</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.dateText}>
          {workoutData.name} - {workoutData?.date}
        </Text>
        <View style={styles.summaryWrapper}>
          <View>
            <View style={styles.center}>
              <MaterialCommunityIcons name="timer" size={30} color="#BCBCC0" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.titleText}>DURACTION</Text>
                <Text style={styles.subTitleText}>{convertSeconds(workoutData.duration)}</Text>
              </View>
            </View>
            <View style={styles.center}>
              <FontAwesome5Icon name="running" size={25} color="#BCBCC0" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.titleText}>SERIES</Text>
                <Text style={styles.subTitleText}>{sets}</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.center}>
              <FontAwesome5Icon name="dumbbell" size={25} color="#BCBCC0" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.titleText}>EXERCIES</Text>
                <Text style={styles.subTitleText}>{exercises}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: '#2E2C39',
    marginVertical: 15,
    padding: 15,
  },
  dateText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  summaryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  titleText: {
    color: '#BCBCC0',
    fontSize: 12,
  },
  subTitleText: {
    color: 'white',
  },
});

export default WorkoutSummaryHeader;
