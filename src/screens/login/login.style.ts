import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  keyboarView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    width: width - 100,
    height: width - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4,
    minWidth: 160,
    color: 'black',
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
    marginVertical: 16,
  },
});
