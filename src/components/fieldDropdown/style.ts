import {StyleSheet} from 'react-native';
import Color from '../../themes/colors';

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
  },
  dropdown: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Color.lightGrey,
    padding: 14,
    alignItems: 'center',
  },
  dropdownOpen: {
    borderColor: Color.blue,
  },
  dropdownError: {
    borderColor: Color.pinkPlus2,
  },
  dropdownDisabled: {
    backgroundColor: Color.lightSmoke,
    borderColor: Color.lightGrey,
  },
  iconDropdown: {
    height: 12,
    width: 12,
    marginLeft: 14,
  },
  textValue: {
    flex: 1,
    marginLeft: 5,
  },
  textPlaceholder: {
    color: Color.grey,
  },
  textError: {
    marginTop: 4,
    color: Color.pinkPlus2,
  },
  logoPlaceholder: {
    width: 25,
    height: 25,
  },
});

export default styles;
