import React, {useState} from 'react';
import {
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Typography from '../../components/Typography';
import profileStyles from './profile.styles';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import MaleAvatar from '../../../assets/icons/MaleAvatar';
import UserIcon from '../../../assets/icons/User';
import EnvelopeIcon from '../../../assets/icons/Envelope';
import GoBack from '../../../assets/icons/GoBack';
import IdIcon from '../../../assets/icons/ID';
import Button from '../../components/Button';
import {Formik} from 'formik';
import {storage} from '../../../App';
import Toast from 'react-native-toast-message';
import {updateStore} from '../../store/auth-slice';
import {useDispatch} from 'react-redux';
import {useUpdateUserMutation} from '../../store/actions/auth';

const Profile = ({navigation}) => {
  const [mutation] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width;
  const user = useSelector(state => state.auth);
  const [submitClicked, setSubmitClicked] = useState(false);
  const updateValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(4, 'First name is too short')
      .required('First name is required'),
    lastName: Yup.string()
      .min(4, 'Last name is too short')
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email')
      .matches(/\@newuu.uz$/, 'Enter your university email')
      .required('Email is required'),
    studentYear: Yup.string().required('Required'),
    studentId: Yup.string().required('Student id is required'),
    groupNumber: Yup.string().required('Required'),
  });

  const submitHandler = values => {
    const userData = {
      first_name: values.firstName,
      last_name: values.lastName,
      username: values.email,
      email: values.email,
      group_number: values.groupNumber,
      student_id: values.studentId,
      student_year: values.studentYear,
    };
    mutation(userData)
      .unwrap()
      .then(userResponse => {
        const jsonValue = JSON.stringify(userResponse);
        storage.set('user', jsonValue);
        Toast.show({
          type: 'success',
          text1: 'Successful update',
          text2: 'Your profile has been updated',
        });
        const store = {
          isAuth: true,
          id: userResponse.id,
          firstName: userResponse.first_name,
          lastName: userResponse.last_name,
          email: userResponse.email,
          groupNumber: userResponse.group_number,
          studentId: userResponse.student_id,
          studentYear: userResponse.student_year,
          token: user.token,
          loading: false,
          firstTime: false,
        };
        dispatch(updateStore(store));
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
    <View style={profileStyles.container}>
      <View style={profileStyles.avatarBox}>
        <TouchableOpacity
          style={profileStyles.goBackBox}
          onPress={() => navigation.navigate('home')}>
          <GoBack />
        </TouchableOpacity>
        <MaleAvatar />
      </View>
      <Typography weight={700} size={20} color={'main'}>
        {user.firstName} {user.lastName}
      </Typography>
      <Typography color={'black'} size={16}>
        {user.email}
      </Typography>
      <Formik
        initialValues={{
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          studentYear: user.studentYear,
          studentId: user.studentId,
          groupNumber: user.groupNumber,
        }}
        validationSchema={updateValidationSchema}
        validateOnChange={submitClicked}
        onSubmit={submitHandler}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={profileStyles.form}>
            <View style={profileStyles.inputBox}>
              <View style={profileStyles.inputIcon}>
                <UserIcon />
              </View>
              <TextInput
                placeholderTextColor={'#000'}
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                placeholder="First name"
                style={profileStyles.input}
              />
              {errors.firstName && (
                <Typography
                  color={'error'}
                  inlineStyle={{textAlign: 'left'}}
                  style={profileStyles.errorText}>
                  {errors.firstName}
                </Typography>
              )}
            </View>
            <View style={profileStyles.inputBox}>
              <View style={profileStyles.inputIcon}>
                <UserIcon />
              </View>
              <TextInput
                placeholderTextColor={'#000'}
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                placeholder="Last name"
                style={profileStyles.input}
              />
              {errors.lastName && (
                <Typography
                  color={'error'}
                  inlineStyle={{textAlign: 'left'}}
                  style={profileStyles.errorText}>
                  {errors.lastName}
                </Typography>
              )}
            </View>
            <View style={profileStyles.inputBox}>
              <View style={profileStyles.inputIcon}>
                <EnvelopeIcon />
              </View>
              <TextInput
                placeholderTextColor={'#000'}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Email"
                style={profileStyles.input}
              />
              {errors.email && (
                <Typography
                  color={'error'}
                  inlineStyle={{textAlign: 'left'}}
                  style={profileStyles.errorText}>
                  {errors.email}
                </Typography>
              )}
            </View>
            <View style={profileStyles.inputBox}>
              <View style={profileStyles.inputIcon}>
                <IdIcon />
              </View>
              <TextInput
                placeholderTextColor={'#000'}
                onChangeText={handleChange('studentId')}
                value={values.studentId}
                placeholder="Student ID"
                style={profileStyles.input}
              />
              {errors.studentId && (
                <Typography
                  color={'error'}
                  inlineStyle={{textAlign: 'left'}}
                  style={profileStyles.errorText}>
                  {errors.studentId}
                </Typography>
              )}
            </View>
            <View style={profileStyles.smallInputWrapper}>
              <View style={profileStyles.smallInputBox}>
                <TextInput
                  placeholderTextColor={'#000'}
                  onChangeText={handleChange('studentYear')}
                  value={values.studentYear}
                  placeholder="Student Year"
                  style={profileStyles.smallInput}
                />
                {errors.studentYear && (
                  <Typography
                    color={'error'}
                    inlineStyle={{textAlign: 'left'}}
                    style={profileStyles.errorText}>
                    {errors.studentYear}
                  </Typography>
                )}
              </View>
              <View style={profileStyles.smallInputBox}>
                <TextInput
                  placeholderTextColor={'#000'}
                  onChangeText={handleChange('groupNumber')}
                  value={values.groupNumber}
                  placeholder="Group Number"
                  style={profileStyles.smallInput}
                />
                {errors.groupNumber && (
                  <Typography
                    color={'error'}
                    inlineStyle={{textAlign: 'left'}}
                    style={profileStyles.errorText}>
                    {errors.groupNumber}
                  </Typography>
                )}
              </View>
            </View>
            <Button
              onPress={() => {
                handleSubmit();
                setSubmitClicked(true);
              }}
              borderRadius={10}
              paddingVertical={14}
              width={windowWidth * 0.8}
              backgroundColor={'main'}>
              {user.loading ? (
                <ActivityIndicator color={'#fff'} size={'large'} />
              ) : (
                <Typography color={'white'} size={16} weight={600}>
                  Update profile
                </Typography>
              )}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Profile;
