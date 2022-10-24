import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import Color from '../../../themes/colors';

import styles from './style';

interface LineProps {
  borderColor?: string;
  orientation?: 'left' | 'center' | 'right';
  style?: StyleProp<ViewStyle>;
}

const Line = ({
  borderColor = Color.solidGrey,
  orientation,
  style,
}: LineProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.line,
          {borderColor: borderColor},
          orientation === 'center' ? styles.shortWidth : styles.flexLine,
          style,
        ]}
      />
    </View>
  );
};

export default Line;
