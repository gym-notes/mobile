import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

interface Props {
  data: {
    name: string;
    series: number;
  };
}

const LastWorkoutItem: React.FC<Props> = ({ data }) => {
  const { name, series } = data;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.textStyle}>{series} series</Text>
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
