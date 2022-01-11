import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface IPlanExercise {
  setModalVisible: (arg: boolean) => void;
  setIsAddExercise: (arg: boolean) => void;
  increaseSeries: (arg: number) => void;
  decreaseSeries: (arg: number) => void;
  deleteExercise: (arg: number) => void;
  setExerciseIndex: (arg: number) => void;
  updateRep: (arg1: number, arg2: string) => void;
  updateWeight: (arg1: number, arg2: string) => void;
  modalVisible: boolean;
  index: number;
  exercises: {
    exerciseId: string;
    exerciseName?: string;
    reps: string;
    weight: string;
    series: number;
  };
}

const PlanExercise: React.FC<IPlanExercise> = ({
  setIsAddExercise,
  setModalVisible,
  modalVisible,
  deleteExercise,
  increaseSeries,
  decreaseSeries,
  exercises,
  index,
  setExerciseIndex,
  updateRep,
  updateWeight,
}) => {
  const { width } = useWindowDimensions();
  const { exerciseName, series, reps, weight } = exercises;
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerText}>{exerciseName?.toUpperCase()}</Text>
        <TouchableOpacity
          onPress={() => {
            setExerciseIndex(index);
            setIsAddExercise?.(false);
            setModalVisible?.(!modalVisible);
          }}>
          <FontAwesome5Icon name="edit" size={20} color="#D44E52" />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.wrapper, width }}>
        <View style={styles.centerItems}>
          <Text style={styles.textStyle}>{series} series</Text>
          <TouchableOpacity onPress={() => increaseSeries(index)} style={{ paddingHorizontal: 5 }}>
            <FontAwesome5Icon name="plus-circle" size={20} color="#D44E52" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => decreaseSeries(index)} style={{ paddingHorizontal: 5 }}>
            <FontAwesome5Icon name="minus-circle" size={20} color="#D44E52" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerItems}>
          <Text style={styles.textStyle}>rep: </Text>
          <TextInput
            style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
            keyboardType="numeric"
            maxLength={3}
            defaultValue="0"
            onChangeText={(value) =>
              updateRep(
                index,
                value
                  .toString()
                  .replace(/^[0]/, '')
                  .replace(/[^0-9]/g, ''),
              )
            }
            value={reps.toString()}
          />
        </View>
        <View style={styles.centerItems}>
          <Text style={styles.textStyle}>kg: </Text>
          <TextInput
            style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
            keyboardType="numeric"
            maxLength={3}
            defaultValue="0"
            onChangeText={(value) =>
              updateWeight(
                index,
                value
                  .toString()
                  .replace(/^[0]/, '')
                  .replace(/[^0-9]/g, ''),
              )
            }
            value={weight.toString()}
          />
        </View>
        <TouchableOpacity onPress={() => deleteExercise(index)} style={{ paddingHorizontal: 5 }}>
          <FontAwesome5Icon name="times" size={20} color="#D44E52" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2E2C39',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  CheckBoxContainerStyle: {
    margin: 0,
    padding: 0,
  },
  centerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 15,
    fontSize: 18,
  },
});

export default PlanExercise;
