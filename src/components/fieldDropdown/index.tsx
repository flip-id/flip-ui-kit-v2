import React, {useEffect, useRef} from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';

import Icons from '../../themes/icons';

import styles from './style';

interface FieldDropdownProps {
  dropdownStyle?: StyleProp<ViewStyle>;
  dropdownErrorStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  valueStyle?: StyleProp<ViewStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityLabelError?: string;
  error?: string;
  // errorDecoration?: string;
  label?: string;
  labelDecoration?: string;
  placeholder?: string;
  value?: string;
  onLayout?: () => void;
  onPress?: () => void;
  isDisabled?: boolean;
  isError?: boolean;
  isOpen?: boolean;
  sourceIcon?: any;
}

const FieldDropdown: React.FC<FieldDropdownProps> = ({
  style,
  dropdownStyle,
  dropdownErrorStyle,
  label,
  labelStyle,
  value,
  valueStyle,
  placeholder,
  onPress,
  onLayout,
  isOpen,
  isDisabled,
  error,
  errorStyle,
  // errorDecoration,
  isError,
  accessibilityLabel,
  accessibilityLabelError,
  sourceIcon,
}) => {
  const iconRotateRef = useRef(new Animated.Value(0)).current;

  useEffect(
    function animateDropdownArrow() {
      Animated.timing(iconRotateRef, {
        toValue: isOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    },
    [isOpen, iconRotateRef],
  );

  const iconRotationVal = iconRotateRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View onLayout={onLayout} style={style}>
      {!!label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.dropdown,
          dropdownStyle,
          isOpen && styles.dropdownOpen,
          isError && (dropdownErrorStyle ?? styles.dropdownError),
          isDisabled && styles.dropdownDisabled,
        ]}
        onPress={onPress}
        disabled={isDisabled}>
        <Image source={sourceIcon} style={styles.logoPlaceholder} />
        <Text
          style={[
            styles.textValue,
            valueStyle,
            (!value || isDisabled) && styles.textPlaceholder,
          ]}>
          {value || placeholder}
        </Text>
        <Animated.Image
          style={[
            styles.iconDropdown,
            {transform: [{rotate: iconRotationVal}]},
          ]}
          source={Icons.dropdownBlack}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {!!isError && !!error && (
        <Text
          accessibilityLabel={accessibilityLabelError}
          style={[styles.textError, errorStyle]}
          // decoration={errorDecoration}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default React.memo(FieldDropdown);
