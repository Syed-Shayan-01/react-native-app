import React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const Shapes = () => {
  return (
    <View>
      <Svg height="320" width="1440" viewBox="0 0 1440 320">
        <Path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L40,234.7C80,245,160,267,240,256C320,245,400,203,480,165.3C560,128,640,96,720,112C800,128,880,192,960,197.3C1040,203,1120,149,1200,106.7C1280,64,1360,32,1400,16L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </Svg>
    </View>
  );
};

export default Shapes;
