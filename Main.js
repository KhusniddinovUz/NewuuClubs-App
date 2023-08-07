import React, {useEffect} from 'react';
import NavigatedPages from './src/navigation';
import Intro from './src/pages/Intro';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {updateStore} from './src/store/auth-slice';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updateState = async () => {
      const userJson = await AsyncStorage.getItem('user');
      const user = JSON.parse(userJson);
      const token = await AsyncStorage.getItem('token');
      const firstTimeJson = await AsyncStorage.getItem('firstTime');
      const firstTime = JSON.parse(firstTimeJson);
      const store = {
        isAuth: token !== null,
        token: token,
        email: user === null ? undefined : user.email,
        firstName: user === null ? undefined : user.first_name,
        lastName: user === null ? undefined : user.last_name,
        loading: false,
        firstTime: firstTime === null,
      };
      dispatch(updateStore(store));
    };

    updateState();
  }, [dispatch]);
  const firstTime = useSelector(state => state.auth.firstTime);
  return firstTime ? <Intro /> : <NavigatedPages />;
};

export default Main;
