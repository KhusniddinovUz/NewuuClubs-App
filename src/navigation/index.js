import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Stack = createNativeStackNavigator();

const NavigatedPages = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Welcome'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'welcome'} component={Welcome} />
        <Stack.Screen name={'login'} component={Login} />
        <Stack.Screen name={'signup'} component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatedPages;
