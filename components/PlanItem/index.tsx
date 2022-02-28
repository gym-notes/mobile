import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { deletePlan } from '../../actions/PlansAction';
import { usePlansDispatch, usePlansState } from '../../contexts/PlansContext';
import Animated, { Layout, LightSpeedOutRight, LightSpeedInLeft } from 'react-native-reanimated';

interface IPlanItem {
  name: string;
  id: string;
  remove: (id: string) => void;
}

const PlanItem: React.FC<IPlanItem> = ({ name, id, remove }) => {
  const dispatch = usePlansDispatch();
  const { isDelete } = usePlansState();

  const handleDeletePlan = async (id: string) => {
    await deletePlan(dispatch, id).then(() => remove(id));
  };

  return (
    <Animated.View
      entering={LightSpeedInLeft}
      layout={Layout.springify()}
      exiting={LightSpeedOutRight}
      style={styles.container}>
      <View style={[styles.wrapper, { flex: 0.9 }]}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
      <TouchableOpacity
        disabled={isDelete}
        onPress={() => handleDeletePlan(id)}
        style={[styles.wrapper, { flex: 0.1, backgroundColor: '#D44E52' }]}>
        {!isDelete ? (
          <Icon name="trash-alt" size={20} color="white" />
        ) : (
          <ActivityIndicator size="small" color="" />
        )}
      </TouchableOpacity>
    </Animated.View>
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
