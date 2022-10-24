import {StyleSheet} from 'react-native';
import Color from '../../themes/colors';

const styles = StyleSheet.create({
  checkBoxContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.greyMin2,
    borderRadius: 16,
    padding: 15,
    marginBottom: 24,
  },
  checkBoxContainerActive: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.flipOrange,
    borderRadius: 16,
    padding: 15,
    marginBottom: 24,
  },
  tickContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.greyMin2,
    borderRadius: 4,
  },
  iconCheck: {
    width: 13.5,
    height: 10,
  },
  title: {
    fontSize: 14,
    color: Color.black,
    marginLeft: 5,
    fontWeight: '500',
    marginRight: 150,
  },
  titleDisabled: {
    fontSize: 14,
    color: Color.grey,
    marginLeft: 5,
    fontWeight: '500',
    marginRight: 150,
  },
});

export default styles;
