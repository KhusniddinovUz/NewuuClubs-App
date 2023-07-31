import {StyleSheet} from 'react-native';

const introSliderStyles = () => {
  return StyleSheet.create({
    title: {
      fontSize: 25,
      fontFamily: 'Poppins-Bold',
      textAlign: 'center',
      color: '#66328E',
    },
    image: {
      marginBottom: 60,
      maxWidth: 300,
      maxHeight: 200,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    button: {
      fontSize: 18,
      color: 'white',
      marginTop: 10,
    },
  });
};

export default introSliderStyles;
