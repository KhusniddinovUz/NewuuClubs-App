import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={27}
      height={28}
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.18 5.621c-4.322 0-7.822 3.499-7.822 7.812 0 4.313 3.5 7.811 7.822 7.811 2.156 0 4.106-.869 5.522-2.279a7.778 7.778 0 002.3-5.532c0-4.313-3.5-7.812-7.822-7.812zM2.66 13.433c0-5.806 4.711-10.51 10.52-10.51 5.808 0 10.52 4.704 10.52 10.51 0 2.42-.821 4.652-2.198 6.428l2.88 2.878a1.349 1.349 0 11-1.905 1.908l-2.886-2.882a10.485 10.485 0 01-6.411 2.177c-5.809 0-10.52-4.704-10.52-10.51z"
        fill="#000"
        opacity={0.3}
      />
    </Svg>
  );
}

export default SvgComponent;
