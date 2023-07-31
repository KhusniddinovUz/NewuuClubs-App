import {StyleSheet} from 'react-native';
import {colors} from '../../config/theme';

const buttonStyles = params => {
  return StyleSheet.create({
    buttonContainer: {
      backgroundColor: colors[params.backgroundColor],
      borderRadius: params.borderRadius,
      width: params.width,
      paddingVertical: params.paddingVertical,
      paddingHorizontal: 57,
    },
  });
};

export default buttonStyles;
