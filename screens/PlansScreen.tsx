import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import PlanItem from '../components/PlanItem';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const dummyData = [
  {
    id: 1,
    name: 'FBW - A',
  },
  {
    id: 2,
    name: 'FBW - B',
  },
  {
    id: 3,
    name: 'PUSH/PULL',
  },
  {
    id: 4,
    name: 'FBW - A',
  },
  {
    id: 5,
    name: 'FBW - B',
  },
  {
    id: 6,
    name: 'PUSH/PULL',
  },
];

const PlansScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>Your Plans</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
          {dummyData.map((item) => (
            <PlanItem key={item.id} name={item.name} />
          ))}
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <Button title="Create new plan" backgroundColor="#D44E52" textColor="white" />
          </TouchableOpacity>
        </View>
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
    flex: 2,
    alignItems: 'center',
    padding: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 25,
  },
  buttonWrapper: {
    paddingTop: 25,
  },
  menuWrapper: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
});

export default PlansScreen;
