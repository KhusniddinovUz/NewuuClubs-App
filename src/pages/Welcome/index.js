import React, {useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import welcomeStyles from './welcome.styles';
import {useSelector} from 'react-redux';

const Welcome = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const isAuth = useSelector(state => state.auth.isAuth);
  const firstTime = useSelector(state => state.auth.firstTime);
  useEffect(() => {
    if (isAuth) {
      navigation.navigate('home');
    } else if (firstTime) {
      navigation.navigate('intro');
    }
  }, [isAuth, navigation, firstTime]);
  return (
    <View style={welcomeStyles.container}>
      <View style={welcomeStyles.contentWrapper}>
        <Typography
          width={windowWidth * 0.7}
          color={'main'}
          inlineStyle={{marginBottom: 5}}
          size={24}
          weight={600}>
          Take part in activities with friends!
        </Typography>
        <Button
          onPress={() => {
            navigation.navigate('signup');
          }}
          width={windowWidth * 0.7}
          backgroundColor={'main'}
          paddingVertical={7}
          borderRadius={5}>
          <Typography size={16} color={'white'}>
            Register
          </Typography>
        </Button>
        <View style={welcomeStyles.textWrapper}>
          <Typography inlineStyle={{marginRight: 5}} size={16} color={'black'}>
            Already have an account?
          </Typography>
          <Typography
            onPress={() => {
              navigation.navigate('login');
            }}
            size={16}
            color={'main'}
            weight={600}>
            Login
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
