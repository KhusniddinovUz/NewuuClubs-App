import {colors} from '../../config/theme';
import {StyleSheet} from 'react-native';

const typographyStyles = params => {
  return StyleSheet.create({
    textStyles: {
      color: colors[params.color],
      lineHeight: params.lineHeight,
      fontSize: params.size,
      textAlign: 'center',
      width: params.width,
    },
  });
};

export default typographyStyles;
