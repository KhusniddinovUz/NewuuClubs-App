import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';

const CourseListLoader = () => {
  return (
    <ContentLoader
      style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}
      viewBox={'0 0 300 90'}
      width={300}
      height={90}
      backgroundColor={'#f3f3f3'}
      foregroundColor={'#ecebeb'}>
      <Circle cx="30" cy="45" r="30" />
      <Rect x="80" y="20" rx={5} width="200" height="25" />
      <Rect x="80" y="55" rx={5} width="200" height="15" />
    </ContentLoader>
  );
};

export default CourseListLoader;
