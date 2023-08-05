import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const signupStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    marginTop: windowWidth * 0.1,
  },
  form: {
    marginTop: 50,
  },
  textWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  error: {},
  inputBox: {
    position: 'relative',
    width: windowWidth * 0.8,
    height: 60,
    marginBottom: 30,
  },
  inputIcon: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    left: 15,
    right: 0,
    bottom: 0,
  },
  input: {
    color: colors.black,
    height: '100%',
    width: '100%',
    borderColor: colors.main,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 55,
  },
});

export default signupStyles;
