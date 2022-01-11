import React from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface IHistoryAccordion {
  navigation: NavigationProp<ParamListBase>;
  workouts: {
    duration: number;
    exercisesNumber: number;
    id: string;
    planName: string;
  };
  workoutId: string;
}

const HistoryAccordion: React.FC<IHistoryAccordion> = ({ workouts, navigation, workoutId }) => {
  const convertSeconds = (seconds: number) => {
    if (seconds) {
      const convertedSeconds = new Date(seconds * 1000).toISOString().substr(11, 8);
      return convertedSeconds;
    }
    return 0;
  };

  return (
    <Animated.View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('WorkoutSummaryScreen', { workoutId })}
        style={styles.wrapper}>
        <View style={styles.infoBox}>
          <FontAwesome5Icon name="dumbbell" color="black" size={19} />
          <View style={styles.textWrapper}>
            <Text style={styles.boldText}>{workouts.planName}</Text>
            <Text style={styles.dateText}>11/09/2021</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons name="timer" color="black" size={20} />
          <View style={styles.textWrapper}>
            <Text style={styles.boldText}>{convertSeconds(workouts.duration)}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Divider orientation="horizontal" width={1} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '90%',
    backgroundColor: '#EDEDED',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    paddingHorizontal: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  dateText: {
    color: '#A2A2AA',
    fontSize: 13,
  },
});

export default HistoryAccordion;
