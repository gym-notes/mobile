import React from 'react';
import { FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import WorkoutSerieItem from './WorkoutSerieItem';

interface Props {
  exerciseName: string;
  exercisesData: Array<Type>;
}

interface Type {
  reps: number;
  weight: number;
}

const WorkoutSeries: React.FC<Props> = ({ exercisesData, exerciseName }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width }}>
      <Text style={styles.textStyle}>{exerciseName.toLocaleUpperCase()}</Text>
      <FlatList
        data={exercisesData}
        renderItem={({ item, index }) => <WorkoutSerieItem seriesData={item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
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
