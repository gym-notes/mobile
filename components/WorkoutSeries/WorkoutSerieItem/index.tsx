import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface IWorkoutSerieItem {
  index: number;
  seriesData: {
    reps: string;
    weight: string;
  };
  updateRep: (arg1: number, arg2: string) => void;
  updateWeight: (arg1: number, arg2: string) => void;
}

const WorkoutSerieItem: React.FC<IWorkoutSerieItem> = ({
  seriesData,
  index,
  updateRep,
  updateWeight,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const { width } = useWindowDimensions();

  return (
    <View style={{ ...styles.container, width }}>
      <Text style={styles.textStyle}>{++index} series</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.textStyle}>rep: </Text>
        <TextInput
          style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
          keyboardType="numeric"
          onChangeText={(value) => updateRep(--index, value)}
          value={seriesData.reps.toString()}
          maxLength={3}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.textStyle}>kg: </Text>
        <TextInput
          style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
          keyboardType="numeric"
          onChangeText={(value) => updateWeight(--index, value)}
          value={seriesData.weight.toString()}
          maxLength={3}
        />
      </View>
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
    alignItems: 'center',
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
