import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import { Input } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../components/Button';
import DropDownPickers from '../components/DropDownPickers';

const ProfileEdit = () => {
  const [valueDate, setValueDate] = useState(null);
  const [valueGender, setValueGender] = useState(null);
  const [valueCountry, setValueCountry] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textStyle}>Edit your profile</Text>
        <Input
          placeholder="Type your name"
          label="First Name"
          labelStyle={styles.inputLabelStyle}
          leftIcon={<FontAwesome5Icon name="user-alt" size={20} color="#BCBCC0" />}
        />
        <Input
          placeholder="Type your last name"
          label="Last Name"
          labelStyle={styles.inputLabelStyle}
          leftIcon={<FontAwesome5Icon name="user-alt" size={20} color="#BCBCC0" />}
        />
        <Input
          placeholder="Type your weight"
          label="Weight in kg"
          labelStyle={styles.inputLabelStyle}
          leftIcon={<FontAwesome5Icon name="weight-hanging" size={20} color="#BCBCC0" />}
        />
        <Input
          placeholder="Type your height"
          label="Height in cm"
          labelStyle={styles.inputLabelStyle}
          leftIcon={<FontAwesome5Icon name="ruler-vertical" size={20} color="#BCBCC0" />}
        />
        <DropDownPickers
          valueDate={valueDate}
          setValueDate={setValueDate}
          valueGender={valueGender}
          setValueGender={setValueGender}
          valueCountry={valueCountry}
          setValueCountry={setValueCountry}
        />
        <Button
          title="Update"
          backgroundColor="#D44E52"
          textColor="white"
          margin={25}
          iconName="account-edit"
        />
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
    padding: 15,
  },
  menuWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
  textStyle: {
    color: '#BCBCC0',
    fontWeight: 'bold',
    marginVertical: 15,
    fontSize: 16,
  },
  inputLabelStyle: {
    color: '#BCBCC0',
  },
});

export default ProfileEdit;
