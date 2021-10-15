import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalOverlay: {
    position: 'absolute',
    width: width,
    height: height,
    flex: 1,
    backgroundColor: '#000000CC',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: 300,
    height: 160,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginVertical: 14,
  },
});
