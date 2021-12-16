import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import HistoryItem from '../components/HistoryItem';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>History</Text>
        <HistoryItem />
      </View>
      <View style={styles.menuWrapper}>
        <Menu />
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 25,
  },
  menuWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 15,
  },
});

export default HistoryScreen;
