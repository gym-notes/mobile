import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import OptionsMenu from '../components/OptionsMenu';
import { Avatar, Divider } from 'react-native-elements';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useProfileDispatch, useProfileState } from '../contexts/ProfileContext';
import { getProfile } from '../actions/ProfileAction';
import LoadingSpinner from '../components/LoadingSpinner';

interface IProfile {
  navigation: NavigationProp<ParamListBase>;
}

const ProfileScreen: React.FC<IProfile> = ({ navigation }) => {
  const dispatch = useProfileDispatch();
  const { profileInformation, isLoading } = useProfileState();

  useEffect(() => {
    void getProfile(dispatch);
  }, [dispatch]);

  const { firstName, height, weight, birthDate } = profileInformation.data;

  const getAge = (birthDate: string) =>
    Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10);

  const getBMI = (weight: number, height: number) =>
    (weight / ((height * height) / 10000)).toFixed(2);

  return (
    <View style={styles.container}>
      <OptionsMenu navigation={navigation} />
      <View style={styles.wrapper}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Avatar
              rounded
              size="xlarge"
              title={firstName.substring(0, 1)}
              activeOpacity={0.5}
              containerStyle={styles.avatarContainerStyle}
              titleStyle={styles.avatarTextStyle}
            />
            <Text style={styles.headerTextStyle}>{firstName}</Text>
            <View style={styles.informationsContainer}>
              <View>
                <Text style={styles.informationsTextStyle}>
                  {weight}
                  <Text style={styles.informationsSubtextStyle}>kg</Text>
                </Text>
                <Text style={styles.textColorStyle}>Weight</Text>
              </View>
              <Divider orientation="vertical" width={3} color="#2E2C39" />
              <View>
                <Text style={styles.informationsTextStyle}>
                  {height}
                  <Text style={styles.informationsSubtextStyle}>cm</Text>
                </Text>
                <Text style={styles.textColorStyle}>Height</Text>
              </View>
              <Divider orientation="vertical" width={3} color="#2E2C39" />
              <View>
                <Text style={styles.informationsTextStyle}>
                  {getAge(birthDate)}
                  <Text style={styles.informationsSubtextStyle}>y.o</Text>
                </Text>
                <Text style={styles.textColorStyle}>Age</Text>
              </View>
            </View>
            <Text style={styles.bmiTextStyle}>
              Your BMI: <Text style={styles.BmiSubtextStyle}>{getBMI(weight, height)}</Text>
            </Text>
          </>
        )}
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
    alignItems: 'center',
    padding: 15,
  },
  avatarContainerStyle: {
    backgroundColor: '#2E2C39',
  },
  avatarTextStyle: {
    color: '#BCBCC0',
  },
  headerTextStyle: {
    color: '#BCBCC0',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginVertical: 10,
  },
  informationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  informationsTextStyle: {
    color: '#BCBCC0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  informationsSubtextStyle: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  textColorStyle: {
    color: '#BCBCC0',
  },
  bmiTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BCBCC0',
    alignSelf: 'flex-start',
    padding: 15,
    marginVertical: 25,
  },
  BmiSubtextStyle: {
    color: '#D44E52',
  },
  menuWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ProfileScreen;
