// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   SafeAreaView,
//   Image,
//   FlatList,
// } from 'react-native';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import React from 'react';
// const {width, height} = Dimensions.get('window');
// const Cart = () => {
//   return (
//     <>
//       <View style={styles.navbar}>
//         <Text>
//           <AntDesign name="left" style={styles.menuicon} />
//         </Text>
//         <Text style={styles.homeTxt}>My Bag</Text>
//         <Text style={styles.userIcon}>
//           <AntDesign name="delete" style={styles.userIcon} />
//         </Text>
//       </View>
//       <FlatList
//         data={[1]}
//         renderItem={() => {
//           return (
//             <SafeAreaView
//               style={{
//                 flexDirection: 'row',
//                 padding: Math.min(width, height) * 0.01,
//                 borderRadius: 10,
//                 marginHorizontal: width * 0.02,
//               }}>
//               <View>
//                 <Image
//                   style={{width: width * 0.3, height: height * 0.2}}
//                   source={require('../../public/images/apple.jpg')}
//                 />
//               </View>
//               <View style={{marginHorizontal: width * 0.04}}>
//                 <Text
//                   style={{
//                     fontWeight: 'bold',
//                     fontSize: Math.min(width, height) * 0.05,
//                   }}>
//                   Apple Handfree
//                 </Text>
//                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                   <Text style={{marginHorizontal: width * 0.01}}>
//                     <Text
//                       style={{
//                         fontSize: Math.min(width, height) * 0.04,
//                         color: '#666666',
//                       }}>
//                       Color:
//                     </Text>
//                     <Text
//                       style={{
//                         fontSize: Math.min(width, height) * 0.04,
//                         color: '#333333',
//                       }}>
//                       Red
//                     </Text>
//                   </Text>
//                   <Text style={{marginHorizontal: width * 0.01}}>
//                     <Text
//                       style={{
//                         fontSize: Math.min(width, height) * 0.04,
//                         color: '#666666',
//                       }}>
//                       Size:
//                     </Text>
//                     <Text
//                       style={{
//                         fontSize: Math.min(width, height) * 0.04,
//                         color: '#333333',
//                       }}>
//                       L
//                     </Text>
//                   </Text>
//                 </View>
//               </View>
//             </SafeAreaView>
//           );
//         }}
//       />
//     </>
//   );
// };

// export default Cart;

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 20,
//   },
//   menuicon: {
//     fontSize: Math.min(width, height) * 0.06,
//     color: '#666666',
//   },
//   homeTxt: {
//     fontSize: Math.min(width, height) * 0.08,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   userIcon: {
//     fontSize: Math.min(width, height) * 0.06,
//     padding: 6,
//     borderRadius: 100,
//     color: '#333333',
//     fontWeight: 'bold',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');
const ProductCard = () => {
  return (
    <>
      <View style={styles.navbar}>
        <Text>
          <AntDesign name="left" style={styles.menuicon} />
        </Text>
        <Text style={styles.homeTxt}>My Bag</Text>
        <Text style={styles.userIcon}>
          <AntDesign name="delete" style={styles.userIcon} />
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../public/images/apple.jpg')} // Replace with your actual image path
            style={styles.image}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Pullover</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginHorizontal: width * 0.01}}>
              <Text
                style={{
                  fontSize: Math.min(width, height) * 0.04,
                  color: '#666666',
                }}>
                Color:
              </Text>
              <Text
                style={{
                  fontSize: Math.min(width, height) * 0.04,
                  color: '#333333',
                }}>
                Red
              </Text>
            </Text>
            <Text style={{marginHorizontal: width * 0.01}}>
              <Text
                style={{
                  fontSize: Math.min(width, height) * 0.04,
                  color: '#666666',
                }}>
                Size:
              </Text>
              <Text
                style={{
                  fontSize: Math.min(width, height) * 0.04,
                  color: '#333333',
                }}>
                L
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>1</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.price}>51$</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  menuicon: {
    fontSize: Math.min(width, height) * 0.06,
    color: '#666666',
  },
  homeTxt: {
    fontSize: Math.min(width, height) * 0.08,
    fontWeight: 'bold',
    color: '#333333',
  },
  userIcon: {
    fontSize: Math.min(width, height) * 0.06,
    padding: 6,
    borderRadius: 100,
    color: '#333333',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '40%',
    height: 120,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductCard;
