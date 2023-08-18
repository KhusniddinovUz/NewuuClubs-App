import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/theme';
const maxWidth = Dimensions.get('window').width;

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: maxWidth,
    paddingHorizontal: maxWidth * 0.05,
    paddingTop: maxWidth * 0.1,
    height: Dimensions.get('window').height,
  },
  topIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInputBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: maxWidth * 0.9,
    marginTop: 40,
    marginBottom: 20,
    position: 'relative',
  },
  searchInputIcon: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    left: 15,
    right: 0,
    bottom: 0,
  },
  searchInput: {
    borderColor: colors.main,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 17,
    paddingLeft: 60,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    textAlignVertical: 'bottom',
  },
});

export default homeStyles;
