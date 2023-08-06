import Toast from 'react-native-toast-message';

const toastMessage = error => {
  let errorMessage = error.map(
    item => `${item.attr.toUpperCase()}: ${item.detail}`,
  );
  console.log(errorMessage);
  Toast.show({
    type: 'success',
    text1: 'Error',
    text2: 'errorMessage',
  });
};

export default toastMessage;
