import React from 'react';
import {TouchableOpacity} from 'react-native';
import buttonStyles from './button.styles';

const Button = ({children, ...props}) => {
  const styles = buttonStyles(props);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={styles.buttonContainer}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
