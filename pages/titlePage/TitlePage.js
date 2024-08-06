// import {useNavigation} from '@react-navigation/native';
// import React from 'react';
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   SafeAreaView,
// } from 'react-native';
// import IonIcon from 'react-native-vector-icons/Ionicons';

// const {width, height} = Dimensions.get('window');

// const TitlePage = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <View style={styles.logoContainer}>
//           <Text style={styles.title}>Educate</Text>
//           <Text style={styles.titleTwo}>Hub</Text>
//         </View>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={() => {
//             navigation.navigate('Login');
//           }}>
//           <IonIcon name="arrow-forward-outline" style={styles.btnTxt} />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0975b0',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: width * 0.05,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingHorizontal: width * 0.13,
//     paddingVertical: height * 0.03,
//     borderRadius: Math.min(width, height) * 0.04,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 4},
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//   },
//   title: {
//     fontSize: Math.min(width, height) * 0.09,
//     fontWeight: 'bold',
//     color: '#0975b0',
//     textAlign: 'center',
//   },
//   titleTwo: {
//     fontSize: Math.min(width, height) * 0.07,
//     fontWeight: '600',
//     color: '#0975b0',
//     textAlign: 'center',
//     marginTop: -height * 0.01,
//   },
//   btn: {
//     backgroundColor: 'white',
//     width: Math.min(width, height) * 0.15,
//     height: Math.min(width, height) * 0.15,
//     borderRadius: Math.min(width, height) * 0.075,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: height * 0.05,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   btnTxt: {
//     fontSize: Math.min(width, height) * 0.08,
//     color: '#0975b0',
//   },
// });

// export default TitlePage;

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const onboardingData = [
  {
    id: '1',
    title:   `Welcome to Educate Hub`,
    description: 'Discover a world of possibilities at your fingertips.',
    image: require('../../public/images/image5.png'), // Replace with your image
  },
  {
    id: '2',
    title: 'Learn Anytime, Anywhere',
    description: 'Access our vast library of courses on the go.',
    image: require('../../public/images/image6.png'), // Replace with your image
  },
  {
    id: '3',
    title: 'Track Your Progress',
    description: 'Stay motivated with personalized learning analytics.',
    image: require('../../public/images/image3.png'), // Replace with your image
  },
];

const OnboardingItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const TitlePage = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  const handlePreview = () => {
    if (currentIndex > 0) {
      flatListRef.scrollToIndex({index: currentIndex - 1});
      setCurrentIndex(currentIndex - 1);
    }
  };

  let flatListRef;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref => (flatListRef = ref)}
        data={onboardingData}
        renderItem={({item}) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item.id}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
      {currentIndex > 0 && (
        <TouchableOpacity style={styles.btnLeft} onPress={handlePreview}>
          <IonIcon name="arrow-back" style={styles.btnTxtLeft} />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.btnRight} onPress={handleNext}>
        <IonIcon name="arrow-forward-outline" style={styles.btnTxtRight} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7f0fc',
  },
  itemContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.1,
  },
  image: {
    width: width * 1,
    height: height * 0.4,
    resizeMode: 'contain',
    // marginBottom: height * 0.05,
  },
  title: {
    fontSize: Math.min(width, height) * 0.06,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  description: {
    fontSize: Math.min(width, height) * 0.04,
    color: '#666666',
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeIndicator: {
    backgroundColor: '#0975b0',
  },
  btnRight: {
    backgroundColor: '#0975b0',
    width: Math.min(width, height) * 0.15,
    height: Math.min(width, height) * 0.15,
    borderRadius: Math.min(width, height) * 0.075,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.05,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnTxtRight: {
    fontSize: Math.min(width, height) * 0.08,
    color: '#FFFFFF',
  },
  btnLeft: {
    backgroundColor: '#0975b0',
    width: Math.min(width, height) * 0.15,
    height: Math.min(width, height) * 0.15,
    borderRadius: Math.min(width, height) * 0.075,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.05,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnTxtLeft: {
    fontSize: Math.min(width, height) * 0.08,
    color: '#FFFFFF',
  },
});

export default TitlePage;
