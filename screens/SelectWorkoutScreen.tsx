import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import WorkoutItem from '../components/WorkoutItem';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const dummyData = [
  {
    id: '1',
    title: 'fbw - a',
  },
  {
    id: '2',
    title: 'fbw - b',
  },
  {
    id: '3',
    title: 'push/pull - a',
  },
  {
    id: '4',
    title: 'push/pull - b',
  },
  {
    id: '5',
    title: 'split',
  },
  {
    id: '6',
    title: 'legs',
  },
];

const SelectWorkoutScreen: React.FC<Props> = ({ navigation }) => {
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
        <Text style={styles.textStyle}>Select your workout</Text>
        <ScrollView>
          {dummyData.map((data) => (
            <WorkoutItem key={data.id} title={data.title} navigation={navigation} />
          ))}
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default SelectWorkoutScreen;
