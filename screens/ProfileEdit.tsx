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
    <View style={{ flex: 1, backgroundColor: '#1B1A22' }}>
      <View style={{ alignItems: 'center', padding: 15 }}>
        <Text style={{ color: '#BCBCC0', fontWeight: 'bold', marginVertical: 15, fontSize: 16 }}>
          Edit your profile
        </Text>
        <Input
          placeholder="Type your name"
          label="First Name"
          labelStyle={{ color: '#BCBCC0' }}
          leftIcon={<FontAwesome5Icon name="user-alt" size={20} color="#BCBCC0" />}
        />
        <Input
          placeholder="Type your last name"
          label="Last Name"
          labelStyle={{ color: '#BCBCC0' }}
          leftIcon={<FontAwesome5Icon name="user-alt" size={20} color="#BCBCC0" />}
        />
        <Input
          placeholder="Type your weight"
          label="Weight in kg"
          labelStyle={{ color: '#BCBCC0' }}
          leftIcon={<FontAwesome5Icon name="weight-hanging" size={20} color="#BCBCC0" />}
        />
        <Input
          placeholder="Type your height"
          label="Height in cm"
          labelStyle={{ color: '#BCBCC0' }}
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
  menuWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ProfileEdit;
