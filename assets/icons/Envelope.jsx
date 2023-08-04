import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

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
        d="M4 7l6.2 4.65a3 3 0 003.6 0L20 7"
        stroke="#66328E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={3}
        y={5}
        width={18}
        height={14}
        rx={2}
        stroke="#66328E"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
