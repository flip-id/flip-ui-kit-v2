import {StyleSheet} from 'react-native';

const alignments = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  center: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default alignments;
