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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10V7a6.5 6.5 0 1113 0v3h.5a3 3 0 013 3v7a3 3 0 01-3 3H5a3 3 0 01-3-3v-7a3 3 0 013-3h.5zm4.025-5.475A3.5 3.5 0 0115.5 7v3h-7V7a3.5 3.5 0 011.025-2.475z"
        fill="#66328E"
      />
    </Svg>
  );
}

export default SvgComponent;
