import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const NavigatedPages = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'welcome'} component={Welcome} />
      <Stack.Screen name={'login'} component={Login} />
      <Stack.Screen name={'signup'} component={Signup} />
      <Stack.Screen name={'home'} component={Home} />
    </Stack.Navigator>
  );
};

export default NavigatedPages;
