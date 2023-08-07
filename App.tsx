import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import toastConfig from './src/config/toastConfig';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
        <Toast config={toastConfig} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
