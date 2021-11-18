import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import LastWorkoutItem from './LastWorkoutItem';

const dummyData = {
  date: '07.11.2021',
  exercise: [
    {
      id: 1,
      name: 'Barbell Olympic Squat',
      series: 2,
    },
    {
      id: 2,
      name: 'Chest Press',
      series: 4,
    },
    {
      id: 3,
      name: 'Barbell Olympic Squat',
      series: 4,
    },
    {
      id: 4,
      name: 'Barbell Olympic Squat',
      series: 4,
    },
    {
      id: 5,
      name: 'Barbell Olympic Squat',
      series: 4,
    },
    {
      id: 6,
      name: 'Barbell Olympic Squat',
      series: 4,
    },
    {
      id: 7,
      name: 'Barbell Olympic Squat',
      series: 4,
    },
    {
      id: 8,
      name: 'Barbell Olympic Squat',
      series: 4,
    },
  ],
};

const LastWorkoutPanel = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textStyle}>{dummyData.date}</Text>
      {dummyData.exercise.map((data) => (
        <LastWorkoutItem key={data.id} data={data} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2C39',
    borderRadius: 10,
    minWidth: '90%',
    height: 200,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    marginVertical: 10,
  },
});

export default LastWorkoutPanel;
