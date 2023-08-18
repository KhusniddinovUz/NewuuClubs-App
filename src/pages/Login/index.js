import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import logo from '../../../assets/logo.png';
import loginStyles from './login.styles';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import EnvelopeIcon from '../../../assets/icons/Envelope';
import LockIcon from '../../../assets/icons/Lock';
import {useLoginUserMutation} from '../../store/actions/auth';
import Toast from 'react-native-toast-message';
import {storage} from '../../../App';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const loading = useSelector(state => state.auth.loading);
  const [mutation] = useLoginUserMutation();
  const windowWidth = Dimensions.get('window').width;
  const [submitClicked, setSubmitClicked] = useState(false);
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .matches(/\@newuu.uz$/, 'Enter your university email')
      .required('Email is required'),
    password: Yup.string()
      .min(4, 'Password is too short')
      .max(12, 'Password is too long')
      .required('Password is required'),
  });
  const submitHandler = values => {
    mutation(values)
      .unwrap()
      .then(async data => {
        storage.set('token', data.token);
        const user = await data.user;
        const jsonValue = JSON.stringify(user);
        storage.set('user', jsonValue);
        Toast.show({
          type: 'success',
          text1: 'Successful login',
          text2: 'You have successfully logged in',
        });
        navigation.navigate('home');
      })
      .catch(error => {
        if (error.data) {
          error.data.errors.forEach(item => {
            Toast.show({
              type: 'error',
              text1: item.attr.toUpperCase(),
              text2: item.detail,
            });
          });
        }
      });
  };

  return (
    <View style={loginStyles.container}>
      <Image style={loginStyles.logo} source={logo} />
      <Typography color={'main'} size={20} weight={700}>
        Welcome back!
      </Typography>
      <Typography color={'main'} size={16}>
        Login to continue
      </Typography>

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginValidationSchema}
        validateOnChange={submitClicked}
        onSubmit={submitHandler}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={loginStyles.form}>
            <View style={loginStyles.inputBox}>
              <View style={loginStyles.inputIcon}>
                <EnvelopeIcon />
              </View>
              <TextInput
                placeholderTextColor={'#000'}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Email"
                style={loginStyles.input}
              />
              {errors.email && (
                <Typography
                  color={'error'}
                  inlineStyle={{textAlign: 'left'}}
                  style={loginStyles.errorText}>
                  {errors.email}
                </Typography>
              )}
            </View>
            <View style={loginStyles.inputBox}>
              <View style={loginStyles.inputIcon}>
                <LockIcon />
              </View>
              <TextInput
                placeholderTextColor={'#000'}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry
                style={loginStyles.input}
              />
              {errors.password && (
                <Typography
                  color={'error'}
                  inlineStyle={{textAlign: 'left'}}
                  style={loginStyles.errorText}>
                  {errors.password}
                </Typography>
              )}
            </View>
            <Button
              onPress={() => {
                handleSubmit();
                setSubmitClicked(true);
              }}
              borderRadius={10}
              paddingVertical={12}
              width={windowWidth * 0.8}
              backgroundColor={'main'}>
              {loading ? (
                <ActivityIndicator color={'#fff'} size={'large'} />
              ) : (
                <Typography color={'white'} size={18} weight={600}>
                  LOG IN
                </Typography>
              )}
            </Button>
          </View>
        )}
      </Formik>

      <View style={loginStyles.textWrapper}>
        <Typography
          color={'black'}
          size={16}
          weight={500}
          inlineStyle={{marginRight: 5}}>
          Don't have an account?
        </Typography>
        <Typography
          onPress={() => {
            navigation.navigate('signup');
          }}
          size={16}
          color={'main'}
          weight={500}>
          Sign up now
        </Typography>
      </View>
    </View>
  );
};

export default Login;
