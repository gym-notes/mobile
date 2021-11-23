import React, { useRef } from 'react';
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

const dummyData = [
  {
    id: '1523',
    exerciseName: 'Barbell Olympic Squat',
    series: [
      {
        id: '1sdf23',
        series: '1',
        rep: '10',
        weight: '120',
        isCompleted: false,
      },
      {
        id: '2sdg3',
        series: '2',
        rep: '10',
        weight: '120',
        isCompleted: false,
      },
      {
        id: '3dfgdf3',
        series: '3',
        rep: '10',
        weight: '120',
        isCompleted: false,
      },
      {
        id: '4dfg3',
        series: '4',
        rep: '10',
        weight: '120',
        isCompleted: false,
      },
    ],
  },
  {
    id: '2hgh32d',
    exerciseName: 'Brabell Bench Press',
    series: [
      {
        id: '1',
        series: '1',
        rep: '10',
        weight: '100',
        isCompleted: false,
      },
      {
        id: '2jss3d',
        series: '2',
        rep: '10',
        weight: '100',
        isCompleted: false,
      },
      {
        id: '3hgds3',
        series: '3',
        rep: '8',
        weight: '100',
        isCompleted: false,
      },
      {
        id: '4dhdf4s',
        series: '4',
        rep: '8',
        weight: '100',
        isCompleted: false,
      },
    ],
  },
];

const WorkoutScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <OptionsMenu />
      <View style={{ flex: 0.7 }}>
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
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.bottomWrapper}>
        <Indicator scrollX={scrollX} width={width} dummyData={dummyData} />
        <View style={styles.seriesButtonsWrapper}>
          <TouchableOpacity style={{ width: '48%' }}>
            <Button
              title="add series"
              iconName="plus-circle-outline"
              backgroundColor="#2E2C39"
              textColor="white"
              width="100%"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '48%' }}>
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
          <Menu />
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
  },
});

export default WorkoutScreen;
