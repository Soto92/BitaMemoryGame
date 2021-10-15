import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const elementWidth = width / 4 - 10;

export const Styles = StyleSheet.create({
  card: {
    height: 90,
    width: elementWidth,
    backgroundColor: '#EFE7BC',
    margin: 2,
  },
  image: {
    height: 90,
    width: elementWidth,
  },
});
