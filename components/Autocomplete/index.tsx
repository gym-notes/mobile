import React from 'react';
import { View, FlatList } from 'react-native';
import AutocompleteItems from './AutocompleteItems';

interface IAutocomplete {
  setExerciseName: (arg: string) => void;
  setFilteredData: (arg: Array<Exercises>) => void;
  filteredData: Array<Exercises>;
  setExerciseId: (aeg: string) => void;
}

type Exercises = {
  name: string;
  id: string;
};

const Autocomplete: React.FC<IAutocomplete> = ({
  setExerciseName,
  setFilteredData,
  filteredData,
  setExerciseId,
}) => {
  const handleExerciseName = (item: { id: string; name: string }) => {
    setExerciseName(item.name);
    setExerciseId(item.id);
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
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Autocomplete;
