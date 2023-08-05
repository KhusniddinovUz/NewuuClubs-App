import React, {useState} from 'react';
import {View, Dimensions, Image, TextInput} from 'react-native';
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

const Signup = ({navigation}) => {
  const [mutation] = useSignupUserMutation();
  const windowWidth = Dimensions.get('window').width;
  const [submitClicked, setSubmitClicked] = useState(false);
  const loginValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(4, 'First name is too short')
      .required('Name is required'),
    lastName: Yup.string()
      .min(4, 'First name is too short')
      .required('Name is required'),
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
    console.log({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    });
    mutation({
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    })
      .unwrap()
      .then(data => {
        // toast.success('Successfully logged in');
        // router.push('/');
        console.log(data);
      })
      .catch(error => {
        // errorHandle(error.data);
        console.log(error.data.errors);
      });
  };

  return (
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
                <Typography color={'error'} style={signupStyles.errorText}>
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
                <Typography color={'error'} style={signupStyles.errorText}>
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
                <Typography color={'error'} style={signupStyles.errorText}>
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
                <Typography color={'error'} style={signupStyles.errorText}>
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
              <Typography color={'white'} size={18} weight={600}>
                SIGN UP
              </Typography>
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
  );
};

export default Signup;
