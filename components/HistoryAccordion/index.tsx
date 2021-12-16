import React from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const HistoryAccordion = () => {
  return (
    <Animated.View style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.infoBox}>
          <FontAwesome5Icon name="dumbbell" color="black" size={19} />
          <View style={styles.textWrapper}>
            <Text style={styles.boldText}>Push/Pull - A</Text>
            <Text style={styles.dateText}>11/09/2021</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons name="timer" color="black" size={20} />
          <View style={styles.textWrapper}>
            <Text style={styles.boldText}>01:12:14</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Divider orientation="horizontal" width={1} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#EDEDED',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    paddingHorizontal: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  dateText: {
    color: '#A2A2AA',
    fontSize: 13,
  },
});

export default HistoryAccordion;
