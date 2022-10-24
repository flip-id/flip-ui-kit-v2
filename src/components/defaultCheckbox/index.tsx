import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

import Color from '../../themes/colors';
import Icons from '../../themes/icons';

import styles from './style';

interface CheckboxProps {
  style?: StyleProp<ViewStyle>;
  isActive?: boolean;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  isError?: boolean;
  title: string;
  disabled: boolean;
}

const DefaultCheckbox = (props: CheckboxProps) => {
  const getBorderColor = () => {
    if (props.isActive) {
      return Color.flipOrange;
    }

    if (props.isError) {
      return Color.pinkPlus1;
    }

    return Color.greyMin2;
  };

  const getBackgroundColor = () => {
    if (props.isActive) {
      return Color.flipOrange;
    }
  };

  const onPressCheckbox = () => {
    if (!props.disabled) {
      return props.setIsActive?.(!props.isActive);
    }
  };

  return (
    <TouchableOpacity onPress={onPressCheckbox} disabled={props.disabled}>
      <View
        style={
          props.isActive
            ? styles.checkBoxContainerActive
            : styles.checkBoxContainer
        }>
        <TouchableOpacity
          disabled={props.disabled}
          activeOpacity={1}
          onPress={() => props.setIsActive?.(!props.isActive)}
          style={[
            styles.tickContainer,
            {
              borderColor: getBorderColor(),
              backgroundColor: getBackgroundColor(),
            },
            props.style,
          ]}>
          <Image source={Icons.checkWhite} style={styles.iconCheck} />
        </TouchableOpacity>
        <Text style={props.disabled ? styles.titleDisabled : styles.title}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DefaultCheckbox;
