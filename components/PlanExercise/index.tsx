import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const PlanExercise = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Text style={styles.headerText}>Deadlift</Text>
      <View style={{ ...styles.wrapper, width }}>
        <View style={styles.centerItems}>
          <Text style={styles.textStyle}>1 series</Text>
          <TouchableOpacity style={{ paddingHorizontal: 5 }}>
            <FontAwesome5Icon name="plus-circle" size={20} color="#D44E52" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 5 }}>
            <FontAwesome5Icon name="minus-circle" size={20} color="#D44E52" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerItems}>
          <Text style={styles.textStyle}>rep: </Text>
          <TextInput
            style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
        <View style={styles.centerItems}>
          <Text style={styles.textStyle}>kg: </Text>
          <TextInput
            style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
        <TouchableOpacity style={{ paddingHorizontal: 5 }}>
          <FontAwesome5Icon name="times" size={20} color="#D44E52" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2E2C39',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  CheckBoxContainerStyle: {
    margin: 0,
    padding: 0,
  },
  centerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 15,
    alignSelf: 'center',
    fontSize: 18,
  },
});

export default PlanExercise;
