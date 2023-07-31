import React from 'react';
import {View, Dimensions} from 'react-native';
import Typography from './src/components/Typography';

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
      <Typography weight={700} color={'main'} size={24}>
        Welcome!!!
      </Typography>
    </View>
  );
};

export default App;
