import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import OptionsMenu from '../components/OptionsMenu';
import PlanExercise from '../components/PlanExercise';
import PlanInput from '../components/PlanInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Modal from '../components/Modal';
import { createPlan, cleanErrorMessage } from '../actions/PlansAction';
import { usePlansDispatch, usePlansState } from '../contexts/PlansContext';
import ErrorMessage from '../components/ErrorMessage';
import { createExercise } from '../actions/ExerciseAtion';
import { useExerciseDispatch } from '../contexts/ExerciseContext';
import LoadingSpinner from '../components/LoadingSpinner';

export interface IFormData {
  PlanName: string;
}

const schema = yup.object({
  PlanName: yup.string().required().min(3).max(35),
});

interface ICreatePlanScreen {
  navigation: NavigationProp<ParamListBase>;
}

interface IExercisesState {
  exerciseId: string;
  series: number;
  reps: string;
  weight: string;
  exerciseName?: string;
}

const CreatePlanScreen: React.FC<ICreatePlanScreen> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema), mode: 'onChange' });

  const [modalVisible, setModalVisible] = useState(false);
  const [isAddExercise, setIsAddExercise] = useState(true);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseId, setExerciseId] = useState('');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [exercises, setExercises] = useState<Array<IExercisesState>>([]);
  const dispatch = usePlansDispatch();
  const exerciseDispatch = useExerciseDispatch();
  const { isSuccess, message, isLoading } = usePlansState();
  const [isVisible, setIsVisible] = useState(false);

  const addExercise = async () => {
    if (exerciseId) {
      const newElement = {
        exerciseId: exerciseId,
        exerciseName: exerciseName,
        series: 4,
        reps: '10',
        weight: '10',
      };

      setExercises((prevState) => [...prevState, newElement]);
      setModalVisible(!modalVisible);
      setExerciseName('');
    } else {
      await createExercise(exerciseDispatch, exerciseName).then((result) => {
        if (result) {
          const newElement = {
            exerciseId: result.exerciseId,
            exerciseName: exerciseName,
            series: 4,
            reps: '10',
            weight: '10',
          };

          setExercises((prevState) => [...prevState, newElement]);
          setModalVisible(!modalVisible);
          setExerciseName('');
        }
      });
    }
  };

  const replaceExercise = async () => {
    if (exerciseId) {
      const newData = [...exercises];

      const newElement = {
        exerciseId: exerciseId,
        exerciseName: exerciseName,
        series: 4,
        reps: '10',
        weight: '10',
      };

      newData[exerciseIndex] = newElement;

      setExercises(newData);
      setModalVisible(!modalVisible);
      setExerciseName('');
    } else {
      await createExercise(exerciseDispatch, exerciseName).then((result) => {
        if (result) {
          const newData = [...exercises];

          const newElement = {
            exerciseId: result.exerciseId,
            exerciseName: exerciseName,
            series: 4,
            reps: '10',
            weight: '10',
          };

          newData[exerciseIndex] = newElement;

          setExercises(newData);
          setModalVisible(!modalVisible);
          setExerciseName('');
        }
      });
    }
  };

  const deleteExercise = (index: number) => {
    const newData = [...exercises];
    newData.splice(index, 1);
    setExercises(newData);
  };

  const increaseSeries = (index: number) => {
    const newData = [...exercises];
    newData[index].series = ++newData[index].series;
    setExercises(newData);
  };

  const decreaseSeries = (index: number) => {
    const newData = [...exercises];
    if (newData[index].series > 1) {
      newData[index].series = --newData[index].series;
    }
    setExercises(newData);
  };

  const updateRep = (index: number, rep: string) => {
    const newData = [...exercises];
    newData[index].reps = rep;
    setExercises(newData);
  };

  const updateWeight = (index: number, weight: string) => {
    const newData = [...exercises];
    newData[index].weight = weight;
    setExercises(newData);
  };

  const onSubmit = (data: IFormData) => {
    const filteredExercises = exercises.filter((item) => delete item.exerciseName);
    return createPlan(dispatch, {
      name: data.PlanName,
      exercises: filteredExercises,
    });
  };

  useEffect(() => {
    if (!message) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      cleanErrorMessage(dispatch);
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, dispatch]);

  return (
    <View style={styles.container}>
      <OptionsMenu setModalVisible={setModalVisible} setIsAddExercise={setIsAddExercise} />
      {isSuccess ? (
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Your plan has been created successfully.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.subText}>Get back</Text>
          </TouchableOpacity>
        </View>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <PlanInput control={control} errors={errors} />
          <View style={styles.wrapper}>
            {message && isVisible && <ErrorMessage message={message} />}
            <Modal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setExerciseName={setExerciseName}
              exerciseName={exerciseName}
              setExerciseId={setExerciseId}
              addExercise={addExercise}
              isAddExercise={isAddExercise}
              replaceExercise={replaceExercise}
            />
            <FlatList
              data={exercises}
              renderItem={({ item, index }) => (
                <PlanExercise
                  setIsAddExercise={setIsAddExercise}
                  setModalVisible={setModalVisible}
                  modalVisible={modalVisible}
                  deleteExercise={deleteExercise}
                  increaseSeries={increaseSeries}
                  decreaseSeries={decreaseSeries}
                  exercises={item}
                  index={index}
                  setExerciseIndex={setExerciseIndex}
                  updateRep={updateRep}
                  updateWeight={updateWeight}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              removeClippedSubviews={false}
            />
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.buttonwrapper}>
              <Button title="Add Plan" textColor="white" backgroundColor="#D44E52" />
            </TouchableOpacity>
          </View>
        </>
      )}
      <View style={styles.menuWrapper}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A22',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  menuWrapper: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  buttonwrapper: {
    marginVertical: 15,
  },
  text: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subText: {
    fontWeight: 'bold',
    color: '#D44E52',
    fontSize: 15,
  },
  textWrapper: {
    flex: 1,
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreatePlanScreen;
