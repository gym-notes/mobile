import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import OptionsMenu from '../components/OptionsMenu';
import PlanExercise from '../components/PlanExercise';
import PlanInput from '../components/PlanInput';

interface ICreatePlanScreen {
  navigation: NavigationProp<ParamListBase>;
}

const CreatePlanScreen: React.FC<ICreatePlanScreen> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <OptionsMenu />
      <PlanInput />
      <View style={styles.wrapper}>
        <PlanExercise />
      </View>
      <TouchableOpacity style={styles.buttonwrapper}>
        <Button title="Add Plan" textColor="white" backgroundColor="#D44E52" />
      </TouchableOpacity>
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
    flex: 2,
    alignItems: 'center',
  },
  menuWrapper: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  buttonwrapper: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default CreatePlanScreen;
