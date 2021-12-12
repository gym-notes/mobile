import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import OptionsMenu from '../components/OptionsMenu';
import { Avatar, Divider } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1B1A22' }}>
      <OptionsMenu />
      <View style={{ alignItems: 'center', padding: 15 }}>
        <Avatar
          rounded
          size="xlarge"
          title="KN"
          activeOpacity={0.5}
          containerStyle={{ backgroundColor: '#2E2C39' }}
          titleStyle={{ color: '#BCBCC0' }}
        />
        <Text
          style={{
            color: '#BCBCC0',
            fontSize: 24,
            fontWeight: 'bold',
            textTransform: 'capitalize',
            marginVertical: 10,
          }}>
          Kamil Nahotko
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
          <View>
            <Text style={{ color: '#BCBCC0', fontSize: 18, fontWeight: 'bold' }}>
              83<Text style={{ fontSize: 12, fontWeight: 'normal' }}>kg</Text>
            </Text>
            <Text style={{ color: '#BCBCC0' }}>Weight</Text>
          </View>
          <Divider orientation="vertical" width={3} color="#2E2C39" />
          <View>
            <Text style={{ color: '#BCBCC0', fontSize: 18, fontWeight: 'bold' }}>
              170<Text style={{ fontSize: 12, fontWeight: 'normal' }}>cm</Text>
            </Text>
            <Text style={{ color: '#BCBCC0' }}>Height</Text>
          </View>
          <Divider orientation="vertical" width={3} color="#2E2C39" />
          <View>
            <Text style={{ color: '#BCBCC0', fontSize: 18, fontWeight: 'bold' }}>
              24<Text style={{ fontSize: 12, fontWeight: 'normal' }}>y.o</Text>
            </Text>
            <Text style={{ color: '#BCBCC0' }}>Age</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#BCBCC0',
            alignSelf: 'flex-start',
            padding: 15,
            marginVertical: 25,
          }}>
          Your BMI: <Text style={{ color: '#D44E52' }}>25.62</Text>
        </Text>
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

export default ProfileScreen;
