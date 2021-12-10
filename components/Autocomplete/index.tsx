import React from 'react';
import { View, FlatList } from 'react-native';
import AutocompleteItems from './AutocompleteItems';

interface Props {
  setExerciseName: (arg: string) => void;
  setFilteredData: (arg: Array<Exercises>) => void;
  filteredData: Array<Exercises>;
}

type Exercises = {
  name: string;
  id: number;
};

const Autocomplete: React.FC<Props> = ({ setExerciseName, setFilteredData, filteredData }) => {
  const handleExerciseName = (item: { id: number; name: string }) => {
    setExerciseName(item.name);
    setFilteredData([]);
  };

  return (
    <View
      style={{
        minWidth: '85%',
        position: 'relative',
        bottom: 25,
        height: 120,
      }}>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <AutocompleteItems item={item} handleExerciseName={handleExerciseName} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Autocomplete;
