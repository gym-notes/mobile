import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title: string;
  backgroundColor: string;
  width?: number | string;
  height?: number;
  margin?: number;
  iconName?: string;
  textColor: string;
  loading?: boolean;
  iconRight?: boolean;
}

const Button: React.FC<Props> = ({
  title,
  backgroundColor,
  width,
  height,
  margin,
  iconName,
  textColor,
  loading,
  iconRight,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        borderRadius: 12,
        width: width ? width : 330,
        height: height ? height : 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: margin ? margin : 0,
      }}>
      {iconName && !iconRight && (
        <Icon name={iconName} size={19} color="white" style={{ marginRight: 5 }} />
      )}
      {loading ? (
        <ActivityIndicator size={28} color="#BCBCC0" />
      ) : (
        <Text style={{ color: textColor, fontWeight: 'bold', textTransform: 'uppercase' }}>
          {title}
        </Text>
      )}
      {iconRight && iconName && (
        <Icon name={iconName} size={19} color="white" style={{ marginLeft: 5 }} />
      )}
    </View>
  );
};

export default Button;
