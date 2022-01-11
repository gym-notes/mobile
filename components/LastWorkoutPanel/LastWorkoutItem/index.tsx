import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

interface ILastWorkoutItem {
  data: {
    id: string;
    name: string;
    sets: Array<ISets>;
  };
}

interface ISets {
  reps: number;
  weight: number;
}

const LastWorkoutItem: React.FC<ILastWorkoutItem> = ({ data }) => {
  const { name, sets } = data;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.textStyle}>{sets.length} series</Text>
      </View>
      <Divider orientation="horizontal" width={1} style={styles.divierStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
  },
  divierStyle: {
    marginVertical: 7,
  },
});

export default LastWorkoutItem;
