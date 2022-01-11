import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { useNavigationState } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { usePlansState } from '../../contexts/PlansContext';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const Menu: React.FC<Props> = ({ navigation }) => {
  const routes = useNavigationState((state) => state.routes);
  const currentRoute = routes[routes.length - 1].name;

  const { planId } = usePlansState();

  return (
    <>
      <Divider orientation="horizontal" width={1} style={styles.dividerStyle} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PlansScreen')}
          style={styles.menuItem}>
          <MaterialIcon
            name="book"
            size={25}
            color={
              currentRoute === 'PlansScreen' || currentRoute === 'CreatePlanScreen'
                ? '#D44E52'
                : '#BCBCC0'
            }
          />
          <Text
            style={{
              ...styles.menuTextStyle,
              color:
                currentRoute === 'PlansScreen' || currentRoute === 'CreatePlanScreen'
                  ? '#D44E52'
                  : '#BCBCC0',
            }}>
            Plans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HistoryScreen')}
          style={styles.menuItem}>
          <FontAwesomeIcon
            name="calendar-alt"
            size={25}
            color={currentRoute === 'HistoryScreen' ? '#D44E52' : '#BCBCC0'}
          />
          <Text
            style={{
              ...styles.menuTextStyle,
              color: currentRoute === 'HistoryScreen' ? '#D44E52' : '#BCBCC0',
            }}>
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            planId ? navigation.navigate('WorkoutScreen') : navigation.navigate('HomeScreen')
          }
          style={styles.menuItem}>
          <FontAwesomeIcon
            name="dumbbell"
            size={25}
            color={
              currentRoute === 'HomeScreen' ||
              currentRoute === 'SelectWorkoutScreen' ||
              currentRoute === 'WorkoutSummaryScreen' ||
              currentRoute === 'WorkoutScreen'
                ? '#D44E52'
                : '#BCBCC0'
            }
          />
          <Text
            style={{
              ...styles.menuTextStyle,
              color:
                currentRoute === 'HomeScreen' ||
                currentRoute === 'SelectWorkoutScreen' ||
                currentRoute === 'WorkoutSummaryScreen' ||
                currentRoute === 'WorkoutScreen'
                  ? '#D44E52'
                  : '#BCBCC0',
            }}>
            Workout
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.menuItem}>
          <FontAwesomeIcon
            name="user-circle"
            size={25}
            color={
              currentRoute === 'ProfileScreen' || currentRoute === 'ProfileEditScreen'
                ? '#D44E52'
                : '#BCBCC0'
            }
            solid
          />
          <Text
            style={{
              ...styles.menuTextStyle,
              color:
                currentRoute === 'ProfileScreen' || currentRoute === 'ProfileEditScreen'
                  ? '#D44E52'
                  : '#BCBCC0',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dividerStyle: {
    marginVertical: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuTextStyle: {
    fontSize: 14,
  },
});

export default Menu;
