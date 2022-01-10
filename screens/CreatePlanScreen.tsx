import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import OptionsMenu from '../components/OptionsMenu';
import PlanExercise from '../components/PlanExercise';
import PlanInput from '../components/PlanInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface IFormData {
  PlanName: string;
}

const schema = yup.object({
  PlanName: yup.string().required().min(3).max(35),
});

interface ICreatePlanScreen {
  navigation: NavigationProp<ParamListBase>;
}

const CreatePlanScreen: React.FC<ICreatePlanScreen> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema), mode: 'onChange' });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <View style={styles.container}>
      <OptionsMenu />
      <PlanInput control={control} errors={errors} />
      <View style={styles.wrapper}>
        <PlanExercise />
      </View>
      <TouchableOpacity onPress={() => onSubmit()} style={styles.buttonwrapper}>
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
