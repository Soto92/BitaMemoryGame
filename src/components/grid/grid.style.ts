import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window')

export const Styles = StyleSheet.create({
  grid: {
    flexWrap: 'wrap',
    width: width - 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
