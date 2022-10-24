import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

type RadioButtonProps = {
  data: any[] | any;
  disabled: boolean;
};

type RadioButtonState = {
  value: string | null;
};

interface RadioButtonEntity {
  key: string;
  text: string;
}

class RadioButton extends Component<RadioButtonProps, RadioButtonState> {
  state: RadioButtonState = {
    value: null,
  };

  render() {
    const {data, disabled} = this.props;
    const {value} = this.state;
    return (
      <View>
        {data.map((res: RadioButtonEntity) => {
          return (
            <TouchableOpacity
              key={res.key}
              disabled={disabled}
              onPress={() => {
                this.setState({
                  value: res.key,
                });
              }}>
              <View
                key={res.key}
                style={
                  value === res.key
                    ? styles.selectedContainer
                    : styles.container
                }>
                <TouchableOpacity
                  disabled={disabled}
                  style={
                    value === res.key
                      ? styles.radioCircleSelected
                      : disabled === false
                      ? styles.radioCircle
                      : styles.radioCircleSelected
                  }
                  onPress={() => {
                    this.setState({
                      value: res.key,
                    });
                  }}>
                  {value === res.key ? (
                    <View style={styles.selectedRb} />
                  ) : (
                    disabled === true && (
                      <View style={styles.disabledRbNormal} />
                    )
                  )}
                </TouchableOpacity>
                <Text
                  style={
                    disabled === false
                      ? styles.radioText
                      : styles.radioTextDisabled
                  }>
                  {res.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default RadioButton;
