import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Menu from '../components/Menu';
import HistoryItem from '../components/HistoryItem';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { getWorkoutsHistory } from '../actions/WorkoutAction';
import { useWorkoutDispatch, useWorkoutState } from '../contexts/WorkoutContext';

interface IHistoryScreen {
  navigation: NavigationProp<ParamListBase>;
}

const HistoryScreen: React.FC<IHistoryScreen> = ({ navigation }) => {
  const dispatch = useWorkoutDispatch();
  const { workoutsHistory } = useWorkoutState();

  useEffect(() => {
    void getWorkoutsHistory(dispatch);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>History</Text>
        <FlatList
          data={workoutsHistory}
          renderItem={({ item }) => (
            <HistoryItem
              workouts={item.workouts}
              month={item.month}
              year={item.year}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 25,
  },
  menuWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 15,
  },
});

export default HistoryScreen;
