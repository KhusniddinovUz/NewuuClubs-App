import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Intro from '../pages/Intro';
import {storage} from '../../App';
import {useDispatch, useSelector} from 'react-redux';
import {updateStore} from '../store/auth-slice';

const Stack = createNativeStackNavigator();

const NavigatedPages = props => {
  const firstTime = useSelector(state => state.auth.firstTime);
  const route = firstTime ? 'intro' : 'welcome';
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuth);
  useEffect(() => {
    const updateState = async () => {
      // storage.clearAll();
      let user;
      const userJson = storage.getString('user');
      if (userJson !== undefined) {
        user = JSON.parse(userJson);
      }
      const token = storage.getString('token');
      const firstTime = storage.getBoolean('firstTime');
      const store = {
        isAuth: token !== undefined,
        id: user === undefined ? undefined : user.id,
        firstName: user === undefined ? undefined : user.first_name,
        lastName: user === undefined ? undefined : user.last_name,
        email: user === undefined ? undefined : user.email,
        groupNumber: user === undefined ? undefined : user.group_number,
        studentId: user === undefined ? undefined : user.student_id,
        studentYear: user === undefined ? undefined : user.student_year,
        token: token,
        loading: false,
        firstTime: firstTime === undefined,
      };
      console.log('update store', user, userJson);
      dispatch(updateStore(store));
    };

    // if (!isAuthenticated) {
    // navigation.navigate('home');
    // }

    updateState();
  }, [dispatch, isAuthenticated]);
  return (
    <Stack.Navigator
      initialRouteName={route}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'intro'} component={Intro} />
      <Stack.Screen name={'welcome'} component={Welcome} />
      <Stack.Screen name={'login'} component={Login} />
      <Stack.Screen name={'signup'} component={Signup} />
      <Stack.Screen name={'home'} component={Home} />
    </Stack.Navigator>
  );
};

export default NavigatedPages;
