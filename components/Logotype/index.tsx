import React from 'react';
import { Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const Logotype = () => {
  return (
    <>
      <Text
        style={{
          textTransform: 'uppercase',
          color: '#BCBCC0',
          fontFamily: 'Roboto',
          fontSize: 48,
          fontWeight: 'bold',
        }}>
        gym notes
      </Text>
      <FontAwesomeIcon name="dumbbell" size={170} color="#BCBCC0" />
    </>
  );
};

export default Logotype;
