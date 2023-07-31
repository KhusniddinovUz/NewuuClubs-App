import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LockIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15 8h2a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V9a1 1 0 011-1h2V7a6 6 0 1112 0v1zM2 10v10h14V10H2zm6 4h2v2H8v-2zm-4 0h2v2H4v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 10-8 0v1h8z"
        fill="#66328E"
      />
    </Svg>
  );
}

export default LockIcon;
