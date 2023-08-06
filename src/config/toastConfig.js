import {BaseToast, ErrorToast} from 'react-native-toast-message';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green'}}
      text1Style={{
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Poppins-Bold',
      }}
      text2Style={{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        flexWrap: 'nowrap',
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Poppins-Bold',
      }}
      text2Style={{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
      }}
    />
  ),
};

export default toastConfig;
