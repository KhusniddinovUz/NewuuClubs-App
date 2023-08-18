import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Typography from '../Typography';
import courseStyles from './course.styles';

const Course = ({title, details, logo}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(title)}
      style={courseStyles.container}>
      <View style={courseStyles.clubLogoContainer}>
        <Image
          style={courseStyles.logo}
          source={{uri: logo}}
          // source={photoshop}
          resizeMode={'cover'}
        />
      </View>
      <View style={courseStyles.courseDetailsContainer}>
        <Typography
          size={20}
          color={'black'}
          weight={700}
          inlineStyle={{textAlign: 'left'}}>
          {title}
        </Typography>
        <Typography size={16} color={'black'} inlineStyle={{textAlign: 'left'}}>
          {details}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default Course;
