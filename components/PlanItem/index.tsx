import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { deletePlan } from '../../actions/PlansAction';
import { usePlansDispatch } from '../../contexts/PlansContext';

interface IPlanItem {
  name: string;
  id: string;
}

const PlanItem: React.FC<IPlanItem> = ({ name, id }) => {
  const dispatch = usePlansDispatch();

  const handleDeletePlan = async (id: string) => {
    await deletePlan(dispatch, id);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, { flex: 0.9 }]}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleDeletePlan(id)}
        style={[styles.wrapper, { flex: 0.1, backgroundColor: '#D44E52' }]}>
        <Icon name="trash-alt" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2C39',
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginVertical: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  wrapper: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PlanItem;
