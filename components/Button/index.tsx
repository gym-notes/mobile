import React from 'react';
import { View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string;
  backgroundColor: string;
  width?: number;
  height?: number;
  margin?: number;
  iconName?: string;
  textColor: string;
}

const Button: React.FC<Props> = ({
  title,
  backgroundColor,
  width,
  height,
  margin,
  iconName,
  textColor,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        borderRadius: 10,
        width: width ? width : 330,
        height: height ? height : 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: margin ? margin : 0,
      }}>
      {iconName && <FontAwesomeIcon name={iconName} size={19} color="white" />}
      <Text style={{ color: textColor, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
};

export default Button;
