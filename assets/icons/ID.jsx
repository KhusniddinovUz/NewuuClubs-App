import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#66328E"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.934 4H17.066c.886 0 1.65 0 2.262.082.655.088 1.284.287 1.793.797.51.51.709 1.138.797 1.793C22 7.284 22 8.048 22 8.934v6.132c0 .886 0 1.65-.082 2.262-.088.655-.287 1.284-.797 1.793-.51.51-1.138.709-1.793.797-.612.082-1.376.082-2.262.082H6.934c-.886 0-1.65 0-2.262-.082-.655-.088-1.284-.287-1.793-.797-.51-.51-.709-1.138-.797-1.793C2 16.716 2 15.952 2 15.066V8.934c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C5.284 4 6.048 4 6.934 4zM8.5 10a.5.5 0 100 1 .5.5 0 000-1zm-2.5.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4zm-1 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm-5 2a1 1 0 100 2h10a1 1 0 100-2H7z"
        fill="#66328E"
      />
    </Svg>
  );
}

export default SvgComponent;
