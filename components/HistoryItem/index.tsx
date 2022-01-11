import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
  FlatList,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryAccordion from '../HistoryAccordion';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface IHistoryItem {
  navigation: NavigationProp<ParamListBase>;
  month: number;
  year: number;
  workouts: Array<IWorkouts>;
}

interface IWorkouts {
  duration: number;
  exercisesNumber: number;
  id: string;
  planName: string;
}

const HistoryItem: React.FC<IHistoryItem> = ({ workouts, month, year, navigation }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const selectedMonthName = months[--month];

  const [isExpanded, setIsExpanded] = useState(false);

  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const getNumberOfExercises = () => {
    const exercisesValue = workouts.map((item) => item.exercisesNumber);
    const reducer = (accumulator: number, curr: number) => accumulator + curr;
    return exercisesValue.reduce(reducer);
  };

  const getSumOfDuration = () => {
    const durationValue = workouts.map((item) => item.duration);
    const reducer = (accumulator: number, curr: number) => accumulator + curr;
    return durationValue.reduce(reducer);
  };

  const seconds = getSumOfDuration();

  const convertSeconds = (seconds: number) => {
    if (seconds) {
      const convertedSeconds = new Date(seconds * 1000).toISOString().substr(11, 8);
      return convertedSeconds;
    }
    return 0;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setIsExpanded(!isExpanded);
        }}
        style={styles.wrapper}>
        <View style={styles.circleWrapper}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{workouts.length}</Text>
          </View>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.monthText}>
            {selectedMonthName} {year}
          </Text>
          <View style={styles.trainingInfo}>
            <View style={styles.textTrainingWrapper}>
              <MaterialCommunityIcons name="timer" color="#D44E52" />
              <Text style={styles.textTraining}>{convertSeconds(seconds)}</Text>
            </View>
            <View style={styles.textTrainingWrapper}>
              <FontAwesome5Icon name="dumbbell" color="#D44E52" />
              <Text style={styles.textTraining}>{getNumberOfExercises()}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <FlatList
          data={workouts}
          renderItem={({ item }) => (
            <HistoryAccordion navigation={navigation} workouts={item} workoutId={item.id} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    minWidth: '100%',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#2E2C39',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
  },
  circleWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: '#D44E52',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoWrapper: {
    flex: 0.8,
  },
  monthText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  trainingInfo: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  textTrainingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  textTraining: {
    color: 'white',
    paddingHorizontal: 5,
  },
});

export default HistoryItem;
