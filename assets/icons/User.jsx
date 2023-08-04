import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM7 14a5 5 0 00-5 5v3a1 1 0 001 1h18a1 1 0 001-1v-3a5 5 0 00-5-5H7z"
        fill="#66328E"
      />
    </Svg>
  );
}

export default SvgComponent;
