import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../components/Button';
import Menu from '../components/Menu';
import PlanItem from '../components/PlanItem';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { getAllPlans } from '../actions/PlansAction';
import { usePlansDispatch, usePlansState } from '../contexts/PlansContext';
import LoadingSpinner from '../components/LoadingSpinner';

interface IPlansScreen {
  navigation: NavigationProp<ParamListBase>;
}

interface IPlans {
  name: string;
  id: string;
}

const PlansScreen: React.FC<IPlansScreen> = ({ navigation }) => {
  const dispatch = usePlansDispatch();
  const { isLoading } = usePlansState();
  const [plans, setPlans] = useState<Array<IPlans>>([]);

  useEffect(() => {
    const getPlans = async () => {
      await getAllPlans(dispatch).then((res) => {
        if (res) {
          setPlans(res.plans);
        }
      });
    };
    void getPlans();
  }, [dispatch]);

  const remove = (id: string) => {
    setPlans(plans.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>Your Plans</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
          {isLoading ? (
            <LoadingSpinner />
          ) : plans.length > 0 ? (
            plans.map((item) => (
              <PlanItem key={item.id} name={item.name} id={item.id} remove={remove} />
            ))
          ) : (
            <View style={styles.warningWrapper}>
              <Text style={styles.warningText}>
                You haven not created any plan {String.fromCodePoint(0x1f4d6)}
              </Text>
            </View>
          )}
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('CreatePlanScreen')}>
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
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 25,
  },
  buttonWrapper: {
    marginVertical: 15,
  },
  menuWrapper: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  warningWrapper: {
    backgroundColor: '#2E2C39',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    color: 'white',
  },
});

export default PlansScreen;
