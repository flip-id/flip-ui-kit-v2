import React, {useMemo, useState} from 'react';
import {View, StyleProp, ViewStyle, LayoutChangeEvent} from 'react-native';

import Color from '../../../themes/colors';

import styles from './style';

interface DashedLineProps {
  axis?: 'horizontal' | 'vertical';
  dashGap?: number;
  dashLength?: number;
  dashThickness?: number;
  dashColor?: string;
  dashStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const DashedLine = ({
  axis = 'horizontal',
  dashGap = 2,
  dashLength = 4,
  dashThickness = 2,
  dashColor = Color.black,
  dashStyle,
  style,
}: DashedLineProps): JSX.Element => {
  const [lineLength, setLineLength] = useState<number>(0);
  const isRow = axis === 'horizontal';
  const numOfDashes: number = Math.ceil(lineLength / (dashGap + dashLength));
  const arrDashes: unknown = numOfDashes as any;

  const dashStyles = useMemo(
    () => ({
      width: isRow ? dashLength : dashThickness,
      height: isRow ? dashThickness : dashLength,
      marginRight: isRow ? dashGap : 0,
      marginBottom: isRow ? 0 : dashGap,
      backgroundColor: dashColor,
    }),
    [dashColor, dashGap, dashLength, dashThickness, isRow],
  );

  function handleOnLayout(event: LayoutChangeEvent) {
    const {width, height} = event.nativeEvent.layout;
    setLineLength(isRow ? width : height);
  }

  return (
    <View
      onLayout={handleOnLayout}
      style={[style, isRow ? styles.row : styles.column]}>
      {[...Array(arrDashes)].map((_, i) => {
        return <View key={i} style={[dashStyles, dashStyle]} />;
      })}
    </View>
  );
};

export default DashedLine;
