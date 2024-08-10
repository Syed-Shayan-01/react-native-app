import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const TabBarIcon = ({focused, color, size, name}) => {
  const animatedValue = new Animated.Value(1);

  if (focused) {
    Animated.spring(animatedValue, {
      toValue: 1.2,
      friction: 2,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View style={{transform: [{scale: animatedValue}]}}>
      <Icon name={name} size={size} color={color} />
    </Animated.View>
  );
};


export default TabBarIcon; 
