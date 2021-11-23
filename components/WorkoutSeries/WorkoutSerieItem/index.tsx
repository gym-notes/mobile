import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface Props {
  seriesData: {
    id: string;
    series: string;
    rep: string;
    weight: string;
    isCompleted: boolean;
  };
}

const WorkoutSerieItem: React.FC<Props> = ({ seriesData }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <View style={{ ...styles.container, width }}>
      <Text style={styles.textStyle}>{seriesData.series} series</Text>
      <Text style={styles.textStyle}>rep: {seriesData.rep}</Text>
      <Text style={styles.textStyle}>kg: {seriesData.weight}</Text>
      <CheckBox
        containerStyle={styles.CheckBoxContainerStyle}
        checkedColor="#D44E52"
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E2C39',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  CheckBoxContainerStyle: {
    margin: 0,
    padding: 0,
  },
});

export default WorkoutSerieItem;
