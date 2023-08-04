import React from 'react';
import Intro from './src/pages/Intro';
import NavigatedPages from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  const firstTime = false;
  return firstTime ? (
    <Intro />
  ) : (
    <Provider store={store}>
      <NavigatedPages />
    </Provider>
  );
};

export default App;
