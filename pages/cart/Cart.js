import React, {useContext, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
  Button,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {CartContext} from '../../components/context/CartContext';
import Navbar from '../../components/navbar/Navbar';
import {Link, useNavigation} from '@react-navigation/native';
import FooterButton from '../../components/button/Button';
const {width, height} = Dimensions.get('window');

// Initial data with quantity field
const initialData = [
  {
    id: 1,
    image: require('../../public/images/apple.jpg'),
    title: 'Pullover',
    color: 'Red',
    size: 'L',
    quantity: 1,
    price: 15.99,
  },
  {
    id: 2,
    image: require('../../public/images/apple.jpg'),
    title: 'Pullover',
    color: 'Red',
    size: 'L',
    quantity: 1,
    price: 15.99,
  },
  {
    id: 3,
    image: require('../../public/images/apple.jpg'),
    title: 'headPhone',
    color: 'Red',
    size: 'L',
    quantity: 1,
    price: 15.99,
  },
  {
    id: 4,
    image: require('../../public/images/apple.jpg'),
    title: 'handfree',
    color: 'Black',
    size: 'L',
    quantity: 1,
    price: 15.99,
  },
];

const ProductCard = () => {
  const navigation = useNavigation();
  const {cartItems, removeFromCart, updateCartQuantity} =
    useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(1);
  const [data, setData] = useState(cartItems);
  // Increment handler
  // const handleChangeNumberPlus = (id, currentQuantity) => {
  //   updateCartQuantity(id, currentQuantity + 1);
  // };

  // const handleChangeNumberMinus = (id, currentQuantity) => {
  //   if (currentQuantity > 1) {
  //     updateCartQuantity(id, currentQuantity - 1);
  //   }
  // };

  const totalAmount = cartItems.reduce((sum, item) => {
    const itemTotal = item.price * item.quantity; // Multiply price by quantity
    return sum + itemTotal; // Sum up all the item totals
  }, 0);
  const handleOptionsPress = (id, event) => {
    setSelectedItem(id);
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 23,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleDeleteFromList = () => {
    if (selectedItem) {
      removeFromCart(selectedItem);
    }
    setModalVisible(false);
  };

  const onClosePopupWindow = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={onClosePopupWindow}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <TouchableOpacity
              onPress={event => handleOptionsPress(item.id, event)}
              style={styles.optionsIconContainer} // Add this style
            >
              <EntypoIcon
                name={'dots-three-vertical'}
                style={styles.optionsIcon}
              />
            </TouchableOpacity>
            {modalVisible && selectedItem === item.id && (
              <Animated.View style={[styles.popup, {opacity: fadeAnim}]}>
                <TouchableOpacity onPress={handleDeleteFromList}>
                  <Text style={{textAlign: 'center'}}>Delete</Text>
                </TouchableOpacity>
              </Animated.View>
            )}
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.colorSizeContainer}>
              <Text>
                <Text style={styles.labelText}>Color:</Text>
                <Text style={styles.valueText}>{item.color}</Text>
              </Text>
              <Text style={styles.colorSizeText}>
                <Text style={styles.labelText}>Size:</Text>
                <Text style={styles.valueText}>{item.size}</Text>
              </Text>
            </View>
            <View style={styles.quantityPriceContainer}>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    updateCartQuantity(item.id, item.quantity - 1)
                  }>
                  <Text style={styles.quantityManageBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>
                  {item.quantity && !isNaN(item.quantity) ? item.quantity : 1}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    updateCartQuantity(item.id, item.quantity + 1)
                  }>
                  <Text style={styles.quantityManageBtn}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>
                  {item.price * item.quantity}$
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <>
      <Navbar
        titleName={'Add to Cart'}
        LinkText={'/Home'}
        IconRight={'trash-o'}
      />
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.totalContainer}>
          <Text style={styles.totalLabelText}>Total Amount:</Text>
          <Text style={styles.totalValueText}>${totalAmount}</Text>
        </TouchableOpacity>
      </View>
      {cartItems && (
        <FooterButton
          title={'Check Out'}
          color={'#0975b0'}
          textColor={'white'}
          onPress={() => {
            navigation.navigate('CheckOut');
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: Math.min(width, height) * 0.02,
    marginHorizontal: width * 0.01,
    borderRadius: 8,
    marginVertical: Math.min(width, height) * 0.03,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    // Add styles if needed
  },
  deleteButton: {
    // Add styles if needed
  },
  menuicon: {
    fontSize: Math.min(width, height) * 0.06,
    color: '#666666',
  },
  homeTxt: {
    fontSize: Math.min(width, height) * 0.05,
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
    marginRight: width * 0.03,
  },
  image: {
    width: width * 0.35,
    height: height * 0.165,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  optionsIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    zIndex: 1,
  },
  optionsIcon: {
    fontSize: Math.min(width, height) * 0.05,
    color: '#666666',
  },
  title: {
    fontSize: width * 0.05,
    width: width * 0.5,
    fontWeight: 'bold',
  },
  colorSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorSizeText: {
    marginHorizontal: width * 0.02,
  },
  labelText: {
    fontSize: Math.min(width, height) * 0.04,
    color: '#666666',
  },
  valueText: {
    fontSize: Math.min(width, height) * 0.04,
    color: '#333333',
  },
  quantityPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: height * 0.07,
    width: height * 0.07,
    backgroundColor: 'white',
    borderRadius: height * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
    elevation: 5,
  },
  quantityManageBtn: {
    fontSize: Math.min(width, height) * 0.056,
    fontWeight: 'bold',
    color: '#666666',
  },
  quantity: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    borderTopEndRadius: Math.min(width, height) * 0.04,
    borderTopStartRadius: Math.min(width, height) * 0.04,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.01,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 50,
  },
  // checkOutButton: {
  //   backgroundColor: '#0975b0',
  //   padding: 15,
  //   borderRadius: 5,
  // },
  // buttonText: {
  //   fontSize: 16,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  totalContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.004,
  },
  totalLabelText: {
    fontSize: Math.min(width, height) * 0.05,
    color: '#666666',
  },
  totalValueText: {
    fontSize: Math.min(width, height) * 0.05,
    fontWeight: '700',
  },
  popup: {
    position: 'absolute',
    top: 30, // Adjust this value to position the popup below the icon
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    width: width * 0.21,
    borderRadius: 5,
    elevation: 5,
    zIndex: 2,
  },
});

export default ProductCard;
