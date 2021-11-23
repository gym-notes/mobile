import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WorkoutSerieItem from './WorkoutSerieItem';

interface Props {
  exerciseName: string;
  exercisesData: Array<Type>;
}

interface Type {
  id: string;
  series: string;
  rep: string;
  weight: string;
  isCompleted: boolean;
}

const WorkoutSeries: React.FC<Props> = ({ exercisesData, exerciseName }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{exerciseName}</Text>
      <FlatList
        data={exercisesData}
        renderItem={({ item }) => <WorkoutSerieItem seriesData={item} />}
        keyExtractor={(item) => item.id}
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
