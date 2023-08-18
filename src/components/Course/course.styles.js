import {StyleSheet} from 'react-native';

const courseStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    width: 300,
    height: 90,
    borderRadius: 20,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#eee',
    padding: 10,
  },
  clubLogoContainer: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  courseDetailsContainer: {
    flexDirection: 'column',
  },
});

export default courseStyles;
