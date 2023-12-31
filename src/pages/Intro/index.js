import React, {useEffect} from 'react';
import {View} from 'react-native';
import Typography from '../../components/Typography';
import AppIntroSlider from 'react-native-app-intro-slider';
import introSliderStyles from './intro.styles';
import {colors} from '../../config/theme';
import Educator from '../../../assets/intro-slides/educator';
import Learning from '../../../assets/intro-slides/learning';
import Certification from '../../../assets/intro-slides/certification';
import {useDispatch, useSelector} from 'react-redux';
import {changeFirstTime} from '../../store/auth-slice';
import {storage} from '../../../App';

const Intro = ({navigation}) => {
  const firstTime = useSelector(state => state.auth.firstTime);
  const dispatch = useDispatch();
  const styles = introSliderStyles();
  const slides = [
    {
      title: 'Welcome to Clubs!!!',
      description:
        'Welcome as you learn a world changing skill to get a better job.',
      image: <Educator />,
    },
    {
      title: 'Choose Your Course',
      description:
        'Choose the course of your choice and gain industry knowledge and experience in it.',
      image: <Learning />,
    },
    {
      title: 'Get Certified',
      description:
        'Start learning and get certified after your training to get a lucrative job',
      image: <Certification />,
    },
  ];

  useEffect(() => {
    if (!firstTime) {
      navigation.navigate('welcome');
    }
  }, [firstTime, navigation]);

  const _renderDoneButton = () => {
    return (
      <View
        style={{
          width: 150,
          borderRadius: 5,
          paddingVertical: 7,
          backgroundColor: colors.main,
        }}>
        <Typography size={16} lineHeight={36} color={'white'} weight={600}>
          Get Started
        </Typography>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View
        style={{
          width: 150,
          borderRadius: 5,
          paddingVertical: 7,
          backgroundColor: colors['main'],
        }}>
        <Typography size={16} lineHeight={36} color={'white'} weight={600}>
          Next
        </Typography>
      </View>
    );
  };

  const _renderBackButton = () => {
    return (
      <View
        style={{
          width: 150,
          height: 50,
          borderRadius: 5,
          paddingVertical: 7,
        }}>
        <Typography size={16} lineHeight={36} color={'main'} weight={700}>
          Back
        </Typography>
      </View>
    );
  };

  const handleDone = async () => {
    storage.set('firstTime', 'false');
    dispatch(changeFirstTime());
    navigation.navigate('welcome');
  };

  const _renderItem = ({item, dimensions}) => (
    <View style={[styles.container, dimensions]}>
      {item.image}
      <View style={{marginTop: 50}}>
        <Typography style={[styles.title]} size={24} color="main" weight={700}>
          {item.title}
        </Typography>
        <Typography
          color={'black'}
          weight={400}
          size={18}
          width={dimensions.width * 0.8}>
          {item.description}
        </Typography>
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      dotStyle={{display: 'none'}}
      activeDotStyle={{display: 'none'}}
      data={slides}
      slides={slides}
      renderItem={_renderItem}
      showSkipButton={false}
      showDoneButton={true}
      showNextButton={true}
      showPrevButton={true}
      onDone={handleDone}
      renderNextButton={_renderNextButton}
      renderPrevButton={_renderBackButton}
      renderDoneButton={_renderDoneButton}
    />
  );
};

export default Intro;
