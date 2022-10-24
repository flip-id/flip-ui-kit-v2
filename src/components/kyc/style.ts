import {StyleSheet} from 'react-native';
import Color from '../../themes/colors';

const styles = StyleSheet.create({
  bottomContentContainer: {
    flex: 1,
    marginTop: 12,
    flexDirection: 'row',
    backgroundColor: Color.flipOrangeMin3,
    borderRadius: 16,
  },
  textBottomContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconKey: {
    height: 24,
    width: 24,
    marginHorizontal: 10,
  },
  iconKeyNewlyCreatedAcc: {
    height: 42,
    width: 42,
    marginHorizontal: 10,
  },
  fillDataText: {
    flexShrink: 1,
    alignSelf: 'center',
  },
  textFailed: {
    color: Color.brightMaroon,
  },
  textFailedFalse: {
    color: Color.paleRed,
  },
  rightContainer: {
    marginLeft: 21,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
});

export default styles;
