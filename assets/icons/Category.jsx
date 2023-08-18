import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G fill="#66328E">
        <Path d="M15.6 4.34c-1.192-.34-3.063-.68-4.424-.68-1.361 0-3.233.34-4.424.68-1.191.17-2.042 1.022-2.212 2.212-.34 1.191-.68 3.063-.68 4.424 0 1.361.34 3.233.51 4.424.17 1.19 1.191 2.041 2.212 2.212 1.19.17 3.062.51 4.423.51 1.362 0 3.233-.34 4.424-.51 1.191-.17 2.042-1.191 2.212-2.212.17-1.191.51-3.063.51-4.424 0-1.361-.34-3.233-.51-4.424 0-1.19-.85-2.041-2.042-2.211zM15.6 23.056c-1.192-.17-3.063-.51-4.425-.51-1.36 0-3.232.34-4.423.51-1.191.17-2.042 1.191-2.212 2.212-.17 1.19-.51 3.062-.51 4.424 0 1.36.34 3.232.51 4.423.17 1.191 1.191 2.042 2.212 2.212 1.19.17 3.062.51 4.423.51 1.362 0 3.233-.34 4.424-.51 1.191-.17 2.042-1.191 2.212-2.212.17-1.19.51-3.062.51-4.424 0-1.36-.34-3.232-.51-4.423-.17-1.191-1.02-2.042-2.212-2.212zM25.467 17.612c1.191.17 3.063.51 4.424.51 1.36 0 3.233-.34 4.424-.51 1.19-.17 2.041-1.191 2.211-2.212.17-1.19.51-3.062.51-4.424 0-1.36-.34-3.232-.51-4.423-.17-1.191-1.19-2.042-2.212-2.212-1.19-.17-3.062-.51-4.423-.51-1.361 0-3.233.34-4.424.51-1.19.17-2.041 1.191-2.212 2.212-.17 1.19-.51 3.062-.51 4.423 0 1.362.34 3.233.51 4.424.17 1.191 1.021 2.042 2.212 2.212zM34.315 23.056c-1.191-.17-3.063-.51-4.424-.51-1.361 0-3.233.34-4.424.51-1.19.17-2.041 1.191-2.212 2.212-.17 1.19-.51 3.062-.51 4.424 0 1.36.34 3.232.51 4.423.17 1.191 1.191 2.042 2.212 2.212 1.191.17 3.063.51 4.424.51 1.36 0 3.233-.34 4.424-.51 1.19-.17 2.041-1.191 2.211-2.212.17-1.19.51-3.062.51-4.424 0-1.36-.34-3.232-.51-4.423-.17-1.191-1.02-2.042-2.212-2.212z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
