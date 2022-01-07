import React from 'react';
import { FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import WorkoutSerieItem from './WorkoutSerieItem';

interface IWorkoutSeries {
  exerciseName: string | undefined;
  exercisesData: Array<Type>;
  updateRep: (arg1: number, arg2: string) => void;
  updateWeight: (arg1: number, arg2: string) => void;
}

interface Type {
  reps: string;
  weight: string;
}

const WorkoutSeries: React.FC<IWorkoutSeries> = ({
  exercisesData,
  exerciseName,
  updateRep,
  updateWeight,
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }}>
      <Text style={styles.textStyle}>{exerciseName?.toLocaleUpperCase()}</Text>
      <FlatList
        data={exercisesData}
        renderItem={({ item, index }) => (
          <WorkoutSerieItem
            seriesData={item}
            index={index}
            updateRep={updateRep}
            updateWeight={updateWeight}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 16,
  },
});

export default WorkoutSeries;
