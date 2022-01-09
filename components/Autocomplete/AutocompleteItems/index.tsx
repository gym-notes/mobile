import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';

type Exercises = {
  name: string;
  id: string;
};

interface Props {
  handleExerciseName: (arg: Exercises) => void;
  item: Exercises;
}

const AutocompleteItems: React.FC<Props> = ({ handleExerciseName, item }) => {
  return (
    <TouchableOpacity onPress={() => handleExerciseName(item)}>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#EDEDED',
        }}>
        <Text
          style={{
            color: 'black',
            textTransform: 'uppercase',
          }}>
          {item.name}
        </Text>
      </View>
      <Divider orientation="horizontal" width={1} color="#BCBCC0" />
    </TouchableOpacity>
  );
};

export default AutocompleteItems;
