import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Logotype from '../components/Logotype';
import Menu from '../components/Menu';
import LastWorkoutPanel from '../components/LastWorkoutPanel';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logotypeWrapper}>
        <Logotype />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.textStyle}>Last workout:</Text>
        <LastWorkoutPanel />
        <View style={styles.buttonWrapperStyle}>
          <Button
            title="start workout"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
            onPress={() => navigation.navigate('SelectWorkoutScreen')}
          />
        </View>
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
  logotypeWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  textStyle: {
    alignSelf: 'flex-start',
    marginHorizontal: '6%',
    marginVertical: 10,
    color: 'white',
  },
  buttonWrapperStyle: {
    marginVertical: 50,
  },
  buttonStyle: {
    minWidth: '90%',
    backgroundColor: '#D44E52',
  },
  buttonTitleStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
