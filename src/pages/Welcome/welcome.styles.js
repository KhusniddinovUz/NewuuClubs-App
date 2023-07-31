import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const welcomeStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    position: 'relative',
    backgroundColor: colors.main,
    alignItems: 'center',
  },
  contentWrapper: {
    paddingVertical: 20,
    alignItems: 'center',
    width: windowWidth * 0.8,
    backgroundColor: colors.white,
    borderRadius: 10,
    position: 'absolute',
    bottom: windowHeight * 0.1,
    left: windowWidth * 0.1,
    right: 0,
  },
  textWrapper: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default welcomeStyles;
