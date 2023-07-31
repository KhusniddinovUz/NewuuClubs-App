import React, {useEffect, useState} from 'react';
import typographyStyles from './typography.styles';
import {Text} from 'react-native';

const Typography = ({children, inlineStyle, ...props}) => {
  const [fontFamily, setFontFamily] = useState('');
  const styles = typographyStyles(props);

  useEffect(() => {
    switch (props.weight) {
      case 400:
        setFontFamily('Poppins-Regular');
        break;
      case 500:
        setFontFamily('Poppins-Medium');
        break;
      case 600:
        setFontFamily('Poppins-SemiBold');
        break;
      case 700:
        setFontFamily('Poppins-Bold');
        break;
      default:
        setFontFamily('Poppins-Regular');
    }
  }, [props.weight]);

  return (
    <Text
      onPress={props.onPress}
      style={[styles.textStyles, {fontFamily: fontFamily, ...inlineStyle}]}>
      {children}
    </Text>
  );
};

export default Typography;
