import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WorkoutSummaryHeader = () => {
  return (
    <>
      <Text style={styles.headerText}>Workout summary</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.dateText}>PUSH/PULL - 03.11.21</Text>
        <View style={styles.summaryWrapper}>
          <View>
            <View style={styles.center}>
              <MaterialCommunityIcons name="timer" size={30} color="#BCBCC0" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.titleText}>DURACTION</Text>
                <Text style={styles.subTitleText}>01:04:25</Text>
              </View>
            </View>
            <View style={styles.center}>
              <FontAwesome5Icon name="running" size={25} color="#BCBCC0" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.titleText}>SERIES</Text>
                <Text style={styles.subTitleText}>19</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.center}>
              <FontAwesome5Icon name="dumbbell" size={25} color="#BCBCC0" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.titleText}>EXERCIES</Text>
                <Text style={styles.subTitleText}>19</Text>
              </View>
            </View>
            <View style={styles.center}>
              <FontAwesome5Icon name="weight-hanging" size={25} color="#BCBCC0" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.titleText}>HEAVIEST WEIGHT</Text>
                <Text style={styles.subTitleText}>160kg</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: '#2E2C39',
    marginVertical: 15,
    padding: 15,
  },
  dateText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  summaryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  titleText: {
    color: '#BCBCC0',
    fontSize: 12,
  },
  subTitleText: {
    color: 'white',
  },
});

export default WorkoutSummaryHeader;
