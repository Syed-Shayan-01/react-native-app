// import {
//   Dimensions,
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';
// const {width, height} = Dimensions.get('window');
// const Item = [
//   {
//     id: 1,
//     name: 'Shayan',
//     RollNo: 25,
//     class: 12,
//     grade: 'A',
//     eyes: 'black',
//   },
//   {
//     id: 2,
//     name: 'Shayan',
//     RollNo: 25,
//     class: 12,
//     grade: 'A',
//     eyes: 'black',
//   },
//   {
//     id: 3,
//     name: 'Shayan',
//     RollNo: 25,
//     class: 12,
//     grade: 'A',
//     eyes: 'black',
//   },
// ];

// const HomePage = () => {
//   return (
//     <View>
//       <View style={styles.navbar}>
//         <Text>
//           <IonIcon name="menu-outline" style={styles.menuicon} />
//         </Text>
//         <Text style={styles.homeTxt}>Home Page</Text>
//         <Text style={styles.userIcon}>
//           <FeatherIcon name="user" style={styles.userIcon} />
//         </Text>
//       </View>
//       <View style={styles.inputContainer}>
//         <SafeAreaView>
//           <View style={styles.inputWrapper}>
//             <Icon name="search" size={20} color="#a0a0a0" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Search..."
//               placeholderTextColor="#a0a0a0"
//             />
//           </View>
//         </SafeAreaView>
//       </View>
//       <View>
//         <Text style={styles.textRecommend}>Recomended for You</Text>
//         {/* // add items using FlatList */}
//         {/* <FlatList
//           data={Item}
//           renderItem={({item}) => {
//             return (
//               <View style={styles.list}>
//                 <Text>{item.name}</Text>
//                 <Text>{item.class}</Text>
//                 <Text>{item.grade}</Text>
//                 <Text>{item.RollNo}</Text>
//               </View>
//             );
//           }}
//           keyExtractor={Item.id}
//           horizontal={true}
//         /> */}

//         <View
//           style={{
//             backgroundColor: 'black',
//             width: width * 1,
//             height: height * 0.15,
//           }}>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingVertical: 20,
//     alignItems: 'center',
//   },
//   menuicon: {
//     fontSize: 30,
//     color: 'black',
//   },
//   homeTxt: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#5e5e5e',
//   },
//   userIcon: {
//     fontSize: 25,
//     backgroundColor: '#0975b0',
//     padding: 6,
//     borderRadius: 100,
//     color: 'white',
//   },
//   inputContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: width * 1,
//     paddingVertical: height * 0.05,
//     paddingHorizontal: width * 0.05,
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: '#0975b0',
//     borderWidth: 1.2,
//     borderRadius: 7,
//     paddingHorizontal: width * 0.03,
//   },
//   icon: {
//     position: 'absolute',
//     right: 10,
//     fontSize: 22,
//     fontStyle: 'normal',
//   },
//   textRecommend: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginHorizontal: width * 0.06,
//     marginVertical: height * 0.03,
//     color: '#5e5e5e',
//   },
//   list: {
//     backgroundColor: 'pink',
//   },
// });

// export default HomePage;

import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AntDesign} from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const BookCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../public/images/image.jpg')}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title}>The Steal Like An Artist</Text>
        <Text style={styles.author}>Austin Kleon</Text>
        <Text style={styles.rating}>5.0 Based on 23k Reviews</Text>
        <Text style={styles.price}>$45.87</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>Grab Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const books = [
  {
    id: 1,
    image: 'https://example.com/book1.jpg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    rating: 4.5,
  },
  {
    id: 2,
    image: 'https://example.com/book2.jpg',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 14.99,
    rating: 4.8,
  },
  {
    id: 3,
    image: 'https://example.com/book3.jpg',
    title: '1984',
    author: 'George Orwell',
    price: 11.99,
    rating: 4.6,
  },
  {
    id: 4,
    image: 'https://example.com/book3.jpg',
    title: '1984',
    author: 'George Orwell',
    price: 11.99,
    rating: 4.6,
  },
];

const HomePage = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 1]}
          renderItem={({item, index}) => {
            return (
              <View>
                {index === 0 && (
                  <>
                    <View style={styles.navbar}>
                      <Text>
                        <IonIcon name="menu-outline" style={styles.menuicon} />
                      </Text>
                      <Text style={styles.homeTxt}>Home Page</Text>
                      <Text style={styles.userIcon}>
                        <FeatherIcon name="user" style={styles.userIcon} />
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <SafeAreaView>
                        <View style={styles.inputWrapper}>
                          <Icon
                            name="search"
                            size={20}
                            color="#a0a0a0"
                            style={styles.icon}
                          />
                          <TextInput
                            style={styles.input}
                            placeholder="Search..."
                            placeholderTextColor="#a0a0a0"
                          />
                        </View>
                      </SafeAreaView>
                    </View>
                    <View>
                      <Text style={styles.textRecommend}>
                        Recommended for You
                      </Text>
                      <FlatList
                        data={books}
                        renderItem={() => (
                          <View
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              flex: 1,
                              backgroundColor: '#f5f5f5',
                            }}>
                            <Image
                              style={{
                                elevation: 20,
                                width: width * 0.4,
                                height: height * 0.25,
                                borderRadius: 5,
                                margin: Math.min(width, height) * 0.03,
                              }}
                              source={require('../../public/images/image.jpg')}
                            />
                          </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                      />
                    </View>
                  </>
                )}
                {index === 1 && (
                  <View>
                    <Text style={styles.textRecommend}>Popular Books</Text>
                    <FlatList
                      data={books}
                      renderItem={({item}) => <BookCard book={item} />}
                      keyExtractor={item => item.id.toString()}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>
      {/* <View style={styles.navbar}>
        <Text>
          <IonIcon name="menu-outline" style={styles.menuicon} />
        </Text>
        <Text style={styles.homeTxt}>Home Page</Text>
        <Text style={styles.userIcon}>
          <FeatherIcon name="user" style={styles.userIcon} />
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <SafeAreaView>
          <View style={styles.inputWrapper}>
            <Icon name="search" size={20} color="#a0a0a0" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              placeholderTextColor="#a0a0a0"
            />
          </View>
        </SafeAreaView>
      </View>
      <View>
        <Text style={styles.textRecommend}>Recommended for You</Text>
        <FlatList
          data={books}
          renderItem={() => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: '#f5f5f5',
              }}>
              <Image
                style={{
                  elevation: 20,
                  width: width * 0.4,
                  height: height * 0.25,
                  borderRadius: 5,
                  margin: Math.min(width, height) * 0.03,
                }}
                source={require('../../public/images/image.jpg')}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={styles.textRecommend}>Popular Books</Text>
        <FlatList
          data={books}
          renderItem={({item}) => <BookCard book={item} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  menuicon: {
    fontSize: 30,
    color: 'black',
  },
  homeTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5e5e5e',
  },
  userIcon: {
    fontSize: 25,
    backgroundColor: '#0975b0',
    padding: 6,
    borderRadius: 100,
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#0975b0',
    borderWidth: 1.2,
    borderRadius: 7,
    paddingHorizontal: width * 0.03,
  },
  icon: {
    position: 'absolute',
    right: 10,
    fontSize: 22,
    fontStyle: 'normal',
  },
  textRecommend: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.03,
    color: '#5e5e5e',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    margin: Math.min(width, height) * 0.015,
    overflow: 'hidden',
  },
  image: {
    width: width * 0.2,
    height: height * 0.19,
    backgroundColor: 'gray', // Placeholder color
    alignSelf: 'center',
    marginHorizontal: width * 0.02,
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
  rating: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0975b0',
  },
  buttons: {
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#0975b0',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    marginVertical: height * 0.006,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 11,
    textAlign: 'center',
  },
});

export default HomePage;
