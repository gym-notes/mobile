import React, { useState, useEffect } from 'react';
import { View, Text, Modal as NativeModal, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Autocomplete from '../Autocomplete';
import Button from '../Button';
import { getExercises } from '../../actions/ExerciseAtion';
import { useExerciseDispatch, useExerciseState } from '../../contexts/ExerciseContext';

interface IModal {
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
  addExercise: () => void;
  exerciseName: string;
  setExerciseName: (arg: string) => void;
  replaceExercise: () => void;
  index?: number;
  isAddExercise: boolean;
  setExerciseId: (arg: string) => void;
}

type Exercises = {
  name: string;
  id: string;
};

const Modal: React.FC<IModal> = ({
  modalVisible,
  setModalVisible,
  addExercise,
  exerciseName,
  setExerciseName,
  replaceExercise,
  isAddExercise,
  setExerciseId,
}) => {
  const dispatch = useExerciseDispatch();
  const { exercises } = useExerciseState();
  const [filteredData, setFilteredData] = useState<Array<Exercises>>([]);

  const handleFilter = (value: string) => {
    setExerciseId('');
    const searchWord = value;
    setExerciseName(searchWord);

    const newFilter = exercises.filter((item) => {
      if (item.name === searchWord) {
        setExerciseName(searchWord);
        setExerciseId(item.id);
      }
      return item.name.toLowerCase().includes(exerciseName.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    void getExercises(dispatch);
  }, [dispatch]);

  return (
    <NativeModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: '#EDEDED',
            padding: 30,
            alignItems: 'center',
            height: 350,
            position: 'relative',
          }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 25 }}>
            {isAddExercise ? 'Add Exercise' : 'Replace Exercise'}
          </Text>
          <Input
            containerStyle={styles.inputContainerStyle}
            labelStyle={styles.labelStyle}
            placeholder="exercise name"
            label="Exercise name:"
            leftIcon={<FontAwesomeIcon name="dumbbell" size={20} color="black" />}
            onChangeText={handleFilter}
            value={exerciseName}
          />
          {filteredData.length != 0 && (
            <Autocomplete
              setExerciseName={setExerciseName}
              setFilteredData={setFilteredData}
              filteredData={filteredData}
              setExerciseId={setExerciseId}
            />
          )}
          <View style={{ position: 'absolute', bottom: 15 }}>
            <TouchableOpacity
              onPress={isAddExercise ? () => addExercise() : () => replaceExercise()}>
              <Button
                title={isAddExercise ? 'add exercise' : 'replace exercise'}
                iconName="plus-circle-outline"
                backgroundColor="#2E2C39"
                textColor="white"
                width={165}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    minWidth: '90%',
  },
  labelStyle: {
    color: 'black',
  },
});

export default Modal;
