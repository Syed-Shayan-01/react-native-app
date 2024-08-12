import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');
const Data = [
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
    title: 'Pullover',
    color: 'Red',
    size: 'L',
    quantity: 1,
    price: 15.99,
  },
  {
    id: 4,
    image: require('../../public/images/apple.jpg'),
    title: 'Pullover',
    color: 'Red',
    size: 'L',
    quantity: 1,
    price: 15.99,
  },
];
const ProductCard = () => {
  const [number, setnumber] = useState(1);

  const handleChangeNumberPlus = () => {
    setnumber(prev => prev + 1);
  };
  const handleChangeNumberMinus = () => {
    if (number > 1) {
      setnumber(prev => prev - 1);
    }
  };
  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.backButton}>
          <AntDesign name="left" style={styles.menuicon} />
        </Text>
        <Text style={styles.homeTxt}>My Bag</Text>
        <Text style={styles.deleteButton}>
          <AntDesign name="delete" style={styles.userIcon} />
        </Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={Data.id}
        renderItem={() => {
          return (
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../public/images/apple.jpg')}
                  style={styles.image}
                />
              </View>
              <View style={styles.detailsContainer}>
                <EntypoIcon
                  name={'dots-three-vertical'}
                  style={styles.optionsIcon}
                />
                <Text style={styles.title}>Pullover</Text>
                <View style={styles.colorSizeContainer}>
                  <Text>
                    <Text style={styles.labelText}>Color:</Text>
                    <Text style={styles.valueText}>Red</Text>
                  </Text>
                  <Text style={styles.colorSizeText}>
                    <Text style={styles.labelText}>Size:</Text>
                    <Text style={styles.valueText}>L</Text>
                  </Text>
                </View>
                <View style={styles.quantityPriceContainer}>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleChangeNumberMinus}>
                      <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{number}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleChangeNumberPlus}>
                      <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>51$</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
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
    marginRight: width * 0.03,
  },
  image: {
    width: width * 0.35,
    height: height * 0.165,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  optionsIcon: {
    position: 'absolute',
    top: 5,
    right: 0,
    fontSize: Math.min(width, height) * 0.05,
    color: '#666666',
  },
  title: {
    fontSize: 18,
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
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
    elevation: 5,
  },
  buttonText: {
    fontSize: Math.min(width, height) * 0.07,
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
