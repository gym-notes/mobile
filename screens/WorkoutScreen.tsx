import React, { useRef, useState } from 'react';
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
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface IWorkoutScreen {
  viewableItems: Array<Type>;
  navigation: NavigationProp<ParamListBase>;
}

interface Type {
  index: number;
  isViewable: boolean;
  key: string;
  item: object;
}

const WorkoutScreen: React.FC<IWorkoutScreen> = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [isAddExercise, setIsAddExercise] = useState(true);

  const [dummyData, setDummyData] = useState([
    {
      exerciseName: 'Barbell Olympic Squat',
      series: [
        {
          rep: '10',
          weight: '120',
          isCompleted: false,
        },
        {
          rep: '10',
          weight: '120',
          isCompleted: false,
        },
        {
          rep: '10',
          weight: '120',
          isCompleted: false,
        },
        {
          rep: '10',
          weight: '120',
          isCompleted: false,
        },
      ],
    },
    {
      exerciseName: 'Brabell Bench Press',
      series: [
        {
          rep: '10',
          weight: '100',
          isCompleted: false,
        },
        {
          rep: '10',
          weight: '100',
          isCompleted: false,
        },
        {
          rep: '8',
          weight: '100',
          isCompleted: false,
        },
        {
          rep: '8',
          weight: '100',
          isCompleted: false,
        },
      ],
    },
  ]);

  const onViewableItemsChanged = ({ viewableItems }: IWorkoutScreen) => {
    setIndex(viewableItems[0].index);
  };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  const addSerie = () => {
    const newData = [...dummyData];

    const newElement = {
      rep: '100',
      weight: '500',
      isCompleted: false,
    };

    newData[index].series.push(newElement);
    setDummyData(newData);
  };

  const removeSerie = () => {
    const newData = [...dummyData];
    if (newData[index].series.length !== 1) {
      newData[index].series.splice(-1);
    }

    setDummyData(newData);
  };

  const addExercise = () => {
    const newElement = {
      exerciseName: exerciseName,
      series: [
        {
          id: '0001ef',
          rep: '10',
          weight: '120',
          isCompleted: false,
        },
      ],
    };

    setDummyData((prevState) => [...prevState, newElement]);
    setModalVisible(!modalVisible);
    setExerciseName('');
  };

  const replaceExercise = () => {
    const newData = [...dummyData];

    const newElement = {
      exerciseName: exerciseName,
      series: [
        {
          rep: '0',
          weight: '0',
          isCompleted: false,
        },
      ],
    };

    newData[index] = newElement;

    setDummyData(newData);
    setModalVisible(!modalVisible);
    setExerciseName('');
  };

  const deleteExercise = () => {
    const newData = [...dummyData];
    newData.splice(index, 1);

    setDummyData(newData);
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
        <FlatList
          data={dummyData}
          renderItem={({ item }) => (
            <WorkoutSeries exercisesData={item.series} exerciseName={item.exerciseName} />
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
      </View>
      <View style={styles.bottomWrapper}>
        <Indicator scrollX={scrollX} width={width} dummyData={dummyData} />
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
        <TouchableOpacity style={styles.finishButtonWrapper}>
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
