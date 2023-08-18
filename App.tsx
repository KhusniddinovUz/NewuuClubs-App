import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import toastConfig from './src/config/toastConfig';
import {NavigationContainer} from '@react-navigation/native';
// import Main from './Main';
import NavigatedPages from './src/navigation';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatedPages />
        <Toast config={toastConfig} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
