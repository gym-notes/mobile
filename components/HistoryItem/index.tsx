import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryAccordion from '../HistoryAccordion';

const HistoryItem = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setIsExpanded(!isExpanded);
        }}
        style={styles.wrapper}>
        <View style={styles.circleWrapper}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>4</Text>
          </View>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.monthText}>November 2021</Text>
          <View style={styles.trainingInfo}>
            <View style={styles.textTrainingWrapper}>
              <MaterialCommunityIcons name="timer" color="#D44E52" />
              <Text style={styles.textTraining}>02:55:27</Text>
            </View>
            <View style={styles.textTrainingWrapper}>
              <FontAwesome5Icon name="dumbbell" color="#D44E52" />
              <Text style={styles.textTraining}>17</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {isExpanded && <HistoryAccordion />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#2E2C39',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
  },
  circleWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: '#D44E52',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoWrapper: {
    flex: 0.8,
  },
  monthText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  trainingInfo: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  textTrainingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  textTraining: {
    color: 'white',
    paddingHorizontal: 5,
  },
});

export default HistoryItem;
