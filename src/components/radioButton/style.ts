import {StyleSheet} from 'react-native';
import Color from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Color.borderDisabled,
    padding: 15,
  },
  selectedContainer: {
    marginBottom: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Color.flipOrange,
    padding: 15,
  },
  radioText: {
    marginRight: 150,
    paddingLeft: 15,
    fontSize: 14,
    color: Color.mainText,
    fontWeight: '500',
  },
  radioTextDisabled: {
    marginRight: 150,
    paddingLeft: 15,
    fontSize: 14,
    color: Color.grey,
    fontWeight: '500',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Color.greyMin2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleSelected: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Color.flipOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleDisabled: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Color.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 14,
    height: 14,
    borderRadius: 50,
    backgroundColor: Color.flipOrange,
  },
  disabledRb: {
    width: 14,
    height: 14,
    borderRadius: 50,
    backgroundColor: Color.grey,
  },
  disabledRbNormal: {
    width: 14,
    height: 14,
    borderRadius: 50,
    backgroundColor: Color.white,
  },
});

export default styles;
