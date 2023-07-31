import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const App = () => {
  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        },
      ]}>
      <Text>Welcome!!!</Text>
      <Text style={{fontSize: 24}}>Welcome!!!</Text>
    </View>
  );
};

export default App;
