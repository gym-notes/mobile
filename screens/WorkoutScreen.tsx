import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
  useWindowDimensions,
} from 'react-native';
import Menu from '../components/Menu';
import Button from '../components/Button';
import WorkoutSeries from '../components/WorkoutSeries';
import OptionsMenu from '../components/OptionsMenu';
import Indicator from '../components/Indicator';
import Modal from '../components/Modal';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { getMyPlan } from '../actions/PlansAction';
import { usePlansDispatch, usePlansState } from '../contexts/PlansContext';
import { useWorkoutDispatch } from '../contexts/WorkoutContext';
import { createWorkout } from '../actions/WorkoutAction';
import LoadingSpinner from '../components/LoadingSpinner';
import { IWorkoutPayload } from '../interfaces/WorkoutInterface';

interface IWorkoutScreen {
  viewableItems: Array<IViewableItems>;
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { id: string } }>;
}

interface IViewableItems {
  index: number;
  isViewable: boolean;
  key: string;
  item: object;
}

interface IExerciseData {
  exerciseName: string | undefined;
  exerciseId?: string;
  sets: Array<ISeries>;
}

interface ISeries {
  reps: number;
  weight: number;
}

const WorkoutScreen: React.FC<IWorkoutScreen> = ({ navigation, route }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [isAddExercise, setIsAddExercise] = useState(true);
  const [ExerciseData, setExerciseData] = useState<IExerciseData[]>([]);

  const plansDispatch = usePlansDispatch();
  const workoutDispatch = useWorkoutDispatch();
  const { myPlan, isLoading } = usePlansState();
  const { id } = route.params;

  useEffect(() => {
    void getMyPlan(plansDispatch, id);
  }, [id, plansDispatch]);

  useEffect(() => {
    const formatedMyPlan = myPlan?.exercises.map((exercise) => ({
      exerciseName: exercise.name,
      exerciseId: exercise.exerciseId,
      sets: Array.from({ length: exercise.series }, () => ({
        reps: exercise.reps,
        weight: exercise.weight,
      })),
    }));

    if (formatedMyPlan) {
      setExerciseData(formatedMyPlan);
    }
  }, [myPlan]);

  const onViewableItemsChanged = ({ viewableItems }: IWorkoutScreen) => {
    setIndex(viewableItems[0].index);
  };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  const addSerie = () => {
    const newData = [...ExerciseData];

    const newElement = {
      reps: 0,
      weight: 0,
    };

    newData[index].sets.push(newElement);
    setExerciseData(newData);
  };

  const removeSerie = () => {
    const newData = [...ExerciseData];
    if (newData[index].sets.length !== 1) {
      newData[index].sets.splice(-1);
    }

    setExerciseData(newData);
  };

  const addExercise = () => {
    const newElement = {
      exerciseName: exerciseName,
      sets: [
        {
          reps: 0,
          weight: 0,
        },
      ],
    };

    setExerciseData((prevState) => [...prevState, newElement]);
    setModalVisible(!modalVisible);
    setExerciseName('');
  };

  const replaceExercise = () => {
    const newData = [...ExerciseData];

    const newElement = {
      exerciseName: exerciseName,
      sets: [
        {
          reps: 0,
          weight: 0,
        },
      ],
    };

    newData[index] = newElement;

    setExerciseData(newData);
    setModalVisible(!modalVisible);
    setExerciseName('');
  };

  const deleteExercise = () => {
    const newData = [...ExerciseData];
    newData.splice(index, 1);

    setExerciseData(newData);
  };

  const handleSubmit = () => {
    const newData: IWorkoutPayload = {
      planId: id,
      duration: 100,
      exercises: ExerciseData.filter((item) => delete item.exerciseName),
    };
    return createWorkout(workoutDispatch, newData);
  };

  return (
    <View style={styles.container}>
      <OptionsMenu
        deleteExercise={deleteExercise}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setIsAddExercise={setIsAddExercise}
      />
      <View style={{ flex: 0.7 }}>
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          addExercise={addExercise}
          exerciseName={exerciseName}
          setExerciseName={setExerciseName}
          replaceExercise={replaceExercise}
          isAddExercise={isAddExercise}
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <FlatList
            data={ExerciseData}
            renderItem={({ item }) => (
              <WorkoutSeries exercisesData={item.sets} exerciseName={item.exerciseName} />
            )}
            horizontal
            scrollEventThrottle={32}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item, index) => index.toString()}
            // @ts-ignore:next-line
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
          />
        )}
      </View>
      <View style={styles.bottomWrapper}>
        <Indicator scrollX={scrollX} width={width} ExerciseData={ExerciseData} />
        <View style={styles.seriesButtonsWrapper}>
          <TouchableOpacity onPress={() => addSerie()} style={{ width: '48%' }}>
            <Button
              title="add series"
              iconName="plus-circle-outline"
              backgroundColor="#2E2C39"
              textColor="white"
              width="100%"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeSerie()} style={{ width: '48%' }}>
            <Button
              title="remove series"
              iconName="minus-circle-outline"
              backgroundColor="#2E2C39"
              textColor="white"
              width="100%"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleSubmit()} style={styles.finishButtonWrapper}>
          <Button title="finish" backgroundColor="#D44E52" textColor="white" width="100%" />
        </TouchableOpacity>
        <View style={styles.menuWrapper}>
          <Menu navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1A22',
    flex: 1,
  },
  bottomWrapper: {
    flex: 0.3,
  },
  seriesButtonsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'space-between',
  },
  finishButtonWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  menuWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default WorkoutScreen;
