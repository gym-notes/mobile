import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import WorkoutItem from '../components/WorkoutItem';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { getAllPlans } from '../actions/PlansAction';
import { usePlansDispatch, usePlansState } from '../contexts/PlansContext';
import LoadingSpinner from '../components/LoadingSpinner';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const SelectWorkoutScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = usePlansDispatch();

  const { plans, isLoading } = usePlansState();

  useEffect(() => {
    void getAllPlans(dispatch);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Button
          title="Back"
          backgroundColor="#D44E52"
          width={75}
          height={35}
          margin={20}
          iconName="arrow-left"
          textColor="white"
        />
      </TouchableOpacity>
      <View style={styles.contentWrapper}>
        <Text style={styles.headerText}>Select your workout</Text>
        <ScrollView>
          {isLoading ? (
            <LoadingSpinner />
          ) : plans ? (
            plans.map((data) => (
              <WorkoutItem key={data.id} id={data.id} title={data.name} navigation={navigation} />
            ))
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('PlansScreen')}
              style={styles.warningWarapper}>
              <Text style={styles.warningText}>
                First create your plan {String.fromCodePoint(0x1f3cb)}
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1A22',
    flex: 1,
  },
  contentWrapper: {
    flex: 2,
    paddingHorizontal: 15,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  warningWarapper: {
    backgroundColor: '#2E2C39',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  warningText: {
    color: 'white',
  },
});

export default SelectWorkoutScreen;
