import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import logo from '../../../assets/logo.png';
import signupStyles from './signup.styles';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import EnvelopeIcon from '../../../assets/icons/Envelope';
import LockIcon from '../../../assets/icons/Lock';
import UserIcon from '../../../assets/icons/User';
import {useSignupUserMutation} from '../../store/actions/auth';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {storage} from '../../../App';

const Signup = ({navigation}) => {
  const loading = useSelector(state => state.auth.loading);
  const [mutation] = useSignupUserMutation();
  const windowWidth = Dimensions.get('window').width;
  const [submitClicked, setSubmitClicked] = useState(false);
  const loginValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(4, 'First name is too short')
      .required('First name is required'),
    lastName: Yup.string()
      .min(4, 'First name is too short')
      .required('Last name is required'),
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
    const user = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    };
    mutation(user)
      .unwrap()
      .then(async data => {
        storage.set('token', data.token);
        const userData = await data.user;
        const jsonValue = JSON.stringify(userData);
        storage.set('user', jsonValue);
        Toast.show({
          type: 'success',
          text1: 'Successful signup',
          text2: 'You have successfully created your account',
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
    <ScrollView>
      <View style={signupStyles.container}>
        <Image style={signupStyles.logo} source={logo} />
        <Typography color={'main'} size={22} weight={700}>
          Create an account
        </Typography>

        <Formik
          initialValues={{email: '', password: '', firstName: '', lastName: ''}}
          validationSchema={loginValidationSchema}
          validateOnChange={submitClicked}
          onSubmit={submitHandler}>
          {({handleChange, handleSubmit, values, errors}) => (
            <View style={signupStyles.form}>
              <View style={signupStyles.inputBox}>
                <View style={signupStyles.inputIcon}>
                  <UserIcon />
                </View>
                <TextInput
                  placeholderTextColor={'#000'}
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  placeholder="First name"
                  style={signupStyles.input}
                />
                {errors.firstName && (
                  <Typography
                    color={'error'}
                    inlineStyle={{textAlign: 'left'}}
                    style={signupStyles.errorText}>
                    {errors.firstName}
                  </Typography>
                )}
              </View>
              <View style={signupStyles.inputBox}>
                <View style={signupStyles.inputIcon}>
                  <UserIcon />
                </View>
                <TextInput
                  placeholderTextColor={'#000'}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  placeholder="Last name"
                  style={signupStyles.input}
                />
                {errors.lastName && (
                  <Typography
                    color={'error'}
                    inlineStyle={{textAlign: 'left'}}
                    style={signupStyles.errorText}>
                    {errors.lastName}
                  </Typography>
                )}
              </View>
              <View style={signupStyles.inputBox}>
                <View style={signupStyles.inputIcon}>
                  <EnvelopeIcon />
                </View>
                <TextInput
                  placeholderTextColor={'#000'}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="Email"
                  style={signupStyles.input}
                />
                {errors.email && (
                  <Typography
                    color={'error'}
                    inlineStyle={{textAlign: 'left'}}
                    style={signupStyles.errorText}>
                    {errors.email}
                  </Typography>
                )}
              </View>
              <View style={signupStyles.inputBox}>
                <View style={signupStyles.inputIcon}>
                  <LockIcon />
                </View>
                <TextInput
                  placeholderTextColor={'#000'}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Password"
                  secureTextEntry
                  style={signupStyles.input}
                />
                {errors.password && (
                  <Typography
                    color={'error'}
                    inlineStyle={{textAlign: 'left'}}
                    style={signupStyles.errorText}>
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
                    SIGN UP
                  </Typography>
                )}
              </Button>
            </View>
          )}
        </Formik>

        <View style={signupStyles.textWrapper}>
          <Typography
            color={'black'}
            size={16}
            weight={500}
            inlineStyle={{marginRight: 5}}>
            Have an account?
          </Typography>
          <Typography
            onPress={() => {
              navigation.navigate('login');
            }}
            size={16}
            color={'main'}
            weight={500}>
            Log in
          </Typography>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
