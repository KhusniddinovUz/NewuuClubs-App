import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowWidth * 0.1,
    height: windowHeight,
    alignItems: 'center',
  },
  avatarBox: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    marginBottom: 20,
  },
  form: {
    marginTop: 50,
  },
  inputBox: {
    position: 'relative',
    width: windowWidth * 0.8,
    height: 60,
    marginBottom: 30,
  },
  smallInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  smallInput: {
    color: colors.black,
    height: '100%',
    width: '100%',
    borderColor: colors.main,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
  smallInputBox: {
    position: 'relative',
    width: windowWidth * 0.35,
    height: 60,
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
  errorText: {
    width: windowWidth,
  },
  goBackBox: {
    position: 'absolute',
    top: 0,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default profileStyles;
