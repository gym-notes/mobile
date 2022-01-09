import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ISetsById } from '../../interfaces/WorkoutInterface';

interface IWorkoutSummarySetsItem {
  setsData: ISetsById;
  index: number;
}

const WorkoutSummarySetsItem: React.FC<IWorkoutSummarySetsItem> = ({ setsData, index }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.center}>
        <Text>{++index} series</Text>
        <Text>load: {setsData.weight}</Text>
        <Text>repeats: {setsData.reps}</Text>
      </View>
      <Divider width={1} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default WorkoutSummarySetsItem;
