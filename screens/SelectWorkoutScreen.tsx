import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import WorkoutItem from '../components/WorkoutItem';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { getMyPlans } from '../actions/PlansAction';
import { usePlansDispatch, usePlansState } from '../contexts/PlansContext';
import LoadingSpinner from '../components/LoadingSpinner';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const SelectWorkoutScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = usePlansDispatch();

  const { plans, isLoading } = usePlansState();
  console.log(isLoading);

  useEffect(() => {
    void getMyPlans(dispatch);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
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
        <Text style={styles.headerText}>Select your workout</Text>
        <ScrollView>
          {isLoading ? (
            <LoadingSpinner />
          ) : plans ? (
            plans.map((data) => (
              <WorkoutItem key={data.id} id={data.id} title={data.name} navigation={navigation} />
            ))
          ) : (
            <Text style={styles.warningText}>First create your plan.</Text>
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
  warningText: {
    color: 'white',
    alignSelf: 'center',
  },
});

export default SelectWorkoutScreen;
