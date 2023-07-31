import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const EnvelopeIcon = props => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path fill="#000" d="M0 0H32V32H0z" />
      <Path transform="translate(-52 -325)" fill="#fff" d="M0 0H414V736H0z" />
      <Rect
        x={-19.5}
        y={-13.5}
        width={349}
        height={59}
        rx={9.5}
        fill="#fff"
        stroke="#66328E"
      />
      <Path
        d="M28 6H4a2 2 0 00-2 2v16a2 2 0 002 2h24a2 2 0 002-2V8a2 2 0 00-2-2zm-2.2 2L16 14.78 6.2 8h19.6zM4 24V8.91l11.43 7.91a1 1 0 001.14 0L28 8.91V24H4z"
        fill="#66328E"
      />
    </Svg>
  );
};

export default EnvelopeIcon;
