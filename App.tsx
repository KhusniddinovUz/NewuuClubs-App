import React from 'react';
import Intro from './src/pages/Intro';
import NavigatedPages from './src/navigation';

const App = () => {
  const firstTime = false;
  return firstTime ? <Intro /> : <NavigatedPages />;
};

export default App;
