import React from 'react';
import { View, Animated } from 'react-native';

interface Props {
  ExerciseData: Array<object>;
  width: number;
  scrollX: Animated.Value;
}

const Indicator: React.FC<Props> = ({ scrollX, width, ExerciseData }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {ExerciseData.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#D44E52',
              margin: 10,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};

export default Indicator;
