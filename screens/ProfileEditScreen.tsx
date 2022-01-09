import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Menu from '../components/Menu';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ProfileForm from '../components/ProfileForm';
import { useProfileState } from '../contexts/ProfileContext';

interface IProfileEdit {
  navigation: NavigationProp<ParamListBase>;
}

export interface IFormData {
  firstName: string;
  height: string;
  weight: string;
  gender: string;
  birthDate: string;
  country: string;
}

const ProfileEdit: React.FC<IProfileEdit> = ({ navigation }) => {
  const { isSuccess } = useProfileState();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {isSuccess ? (
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Your profile has been updated successfully.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.subText}>Get back</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ProfileForm />
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
  menuWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subText: {
    fontWeight: 'bold',
    color: '#D44E52',
    fontSize: 15,
  },
  textWrapper: {
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileEdit;
