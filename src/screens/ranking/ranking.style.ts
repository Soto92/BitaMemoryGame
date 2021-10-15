import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    width: width - 40,
    paddingVertical: 8,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  text: {
    width: '50%',
    color: 'black',
  },
  body: {
    height: '90%',
  },
  button: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4,
    minWidth: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    backgroundColor: 'white',
  },
});
