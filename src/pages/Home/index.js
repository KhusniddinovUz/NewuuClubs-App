import React, {useEffect} from 'react';
import {View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Typography from '../../components/Typography';
import homeStyles from './home.styles';
import CategoryIcon from '../../../assets/icons/Category';
import MaleAvatarIcon from '../../../assets/icons/MaleAvatar';
import {useSelector} from 'react-redux';
import SearchIcon from '../../../assets/icons/Search';
import Course from '../../components/Course';
import CourseListLoader from '../../utils/courseListLoader';
import {useGetCoursesMutation} from '../../store/actions/courses';

const Home = ({navigation}) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const courses = useSelector(state => state.courses.courses);
  const loading = useSelector(state => state.courses.loading);
  const user = useSelector(state => state.auth);
  const [mutation] = useGetCoursesMutation();

  useEffect(() => {
    mutation();
  }, [mutation]);

  useEffect(() => {
    if (!isAuth) {
      navigation.navigate('welcome');
    }
  }, [isAuth, navigation]);

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.topIconsWrapper}>
        <CategoryIcon />
        <MaleAvatarIcon />
      </View>
      <Typography
        inlineStyle={{textAlign: 'left', marginTop: 15}}
        size={24}
        weight={700}
        color={'black'}>
        Hello, {user.firstName}
      </Typography>
      <Typography
        size={16}
        weight={500}
        color={'black'}
        inlineStyle={{textAlign: 'left', marginTop: 5}}>
        What do you want to learn
      </Typography>
      <TouchableOpacity style={homeStyles.searchInputBox}>
        <View style={homeStyles.searchInputIcon}>
          <SearchIcon />
        </View>
        <TextInput
          style={homeStyles.searchInput}
          placeholder={'Search...'}
          placeholderTextColor={'rgba(0,0,0,0.3)'}
        />
      </TouchableOpacity>
      {!loading && (
        <FlatList
          data={courses}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Course
              title={item.title}
              details={item.details}
              logo={item.logo}
            />
          )}
        />
      )}
      {loading && (
        <>
          <CourseListLoader />
          <CourseListLoader />
          <CourseListLoader />
          <CourseListLoader />
        </>
      )}
    </View>
  );
};

export default Home;
