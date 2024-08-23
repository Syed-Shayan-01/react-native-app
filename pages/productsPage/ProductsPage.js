import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../../components/navbar/Navbar';
const {width, height} = Dimensions.get('window');
const StarRating = ({rating}) => {
  return (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map(star => (
        <Icon
          key={star}
          name={star <= rating ? 'star' : 'star-o'}
          size={16}
          color={star <= rating ? '#FFD700' : '#E0E0E0'}
        />
      ))}
    </View>
  );
};

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.productItem}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      {item.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      )}
      {/* <TouchableOpacity style={styles.favoriteButton}>
      <Icon name="heart-o" size={24} color="#E0E0E0" />
    </TouchableOpacity> */}
      <Text style={styles.brandName}>{item.category}</Text>
      <Text
        style={styles.productName}
        numberOfLines={1}
        onPress={() => navigation.navigate('BuyPage', {item})}>
        {item.title}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>${item.price}</Text>
        {item.originalPrice && (
          <Text style={styles.originalPrice}>${item.originalPrice}</Text>
        )}
      </View>
      <View style={styles.ratingreviewContainer}>
        <StarRating rating={item.rating.rate} />
        <Text style={styles.reviewCount}>({item.rating.count})</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProductPage = () => {
  const {params} = useRoute();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        const filteredData = response.data.filter(
          product => product.category === params.category,
        );
        setData(filteredData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="extraLarge"
        color="#0975b0"
        style={{marginVertical: width * 0.7}} // Adjust margin based on your layout
      />
    );
  }
  //   {
  //     id: '1',
  //     title: 'T-Shirt SPANISH',
  //     brand: 'Mango',
  //     price: '9',
  //     originalPrice: '12',
  //     image:
  //       'https://5.imimg.com/data5/YC/KS/MY-12985213/wireless-bluetooth-4-0-stereo-headset-handsfree-earphone-500x500.jpg',
  //     discount: '-20%',
  //     rating: 4,
  //     reviewCount: 3,
  //     description:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto, qui minima vel ullam beatae quae nulla repellat sit sequi, laborum facere deleniti!',
  //   },
  //   {
  //     id: '2',
  //     title: 'Blouse',
  //     brand: 'Dorothy Perkins',
  //     price: '14',
  //     image:
  //       'https://5.imimg.com/data5/YC/KS/MY-12985213/wireless-bluetooth-4-0-stereo-headset-handsfree-earphone-500x500.jpg',
  //     rating: 5,
  //     reviewCount: 10,
  //     description:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto, qui minima vel ullam beatae quae nulla repellat sit sequi, laborum facere deleniti!',
  //   },
  //   {
  //     id: '3',
  //     title: 'Jeans',
  //     brand: "Levi's",
  //     price: '45',
  //     originalPrice: '60',
  //     image:
  //       'https://5.imimg.com/data5/YC/KS/MY-12985213/wireless-bluetooth-4-0-stereo-headset-handsfree-earphone-500x500.jpg',
  //     rating: 4.5,
  //     reviewCount: 8,
  //   },
  //   {
  //     id: '4',
  //     title: 'Leather Jacket',
  //     brand: 'Zara',
  //     price: '120',
  //     originalPrice: '150',
  //     image:
  //       'https://5.imimg.com/data5/YC/KS/MY-12985213/wireless-bluetooth-4-0-stereo-headset-handsfree-earphone-500x500.jpg',
  //     discount: '-20%',
  //     rating: 4.7,
  //     reviewCount: 12,
  //     description:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto, qui minima vel ullam beatae quae nulla repellat sit sequi, laborum facere deleniti!',
  //   },
  //   {
  //     id: '5',
  //     title: 'Sneakers',
  //     brand: 'Nike',
  //     price: '85',
  //     originalPrice: '100',
  //     image:
  //       'https://5.imimg.com/data5/YC/KS/MY-12985213/wireless-bluetooth-4-0-stereo-headset-handsfree-earphone-500x500.jpg',
  //     discount: '-15%',
  //     rating: 4.8,
  //     reviewCount: 25,
  //     description:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto, qui minima vel ullam beatae quae nulla repellat sit sequi, laborum facere deleniti!',
  //   },
  //   {
  //     id: '6',
  //     title: 'Dress',
  //     brand: 'H&M',
  //     price: '30',
  //     originalPrice: '40',
  //     image:
  //       'https://5.imimg.com/data5/YC/KS/MY-12985213/wireless-bluetooth-4-0-stereo-headset-handsfree-earphone-500x500.jpg',
  //     discount: '-25%',
  //     rating: 4.3,
  //     reviewCount: 15,
  //     description:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto, qui minima vel ullam beatae quae nulla repellat sit sequi, laborum facere deleniti!',
  //   },
  // ];

  return (
    <SafeAreaView style={styles.container}>
      <Navbar titleName={'Products'} LinkText={'/Home'}/>
      <View style={styles.categoryContainer}>
        {['T-shirts', 'Crop tops', 'Blouses', 'Shirts'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={18} color="#333333" />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Icon name="sort" size={18} color="#333333" />
          <Text style={styles.sortText}>Price: lowest to high</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Math.min(width, height) * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  categoryButton: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.0156,
    backgroundColor: 'black',
    borderRadius: 50,
  },
  categoryText: {
    fontSize: Math.min(width, height) * 0.0368,
    fontWeight: '500',
    color: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Math.min(width, height) * 0.03,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: width * 0.015,
    fontSize: Math.min(width, height) * 0.035,
  },
  sortText: {
    marginLeft: width * 0.015,
    fontSize: Math.min(width, height) * 0.035,
  },
  productItem: {
    flex: 1,
    margin: Math.min(width, height) * 0.02,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: Math.min(width, height) * 0.03,
    elevation: 3,
    shadowColor: '#333333',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    alignSelf: 'center',
    aspectRatio: 1,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: height * 0.03,
    left: width * 0.04,
    backgroundColor: '#0975b0',
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.005,
    borderRadius: 3,
  },
  discountText: {
    color: 'white',
    fontSize: Math.min(width, height) * 0.03,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 100,
    padding: Math.min(width, height) * 0.03,
  },
  brandName: {
    marginTop: height * 0.01,
    fontSize: Math.min(width, height) * 0.03,
    color: '#666666',
    textTransform: 'capitalize',
  },
  productName: {
    marginTop: height * 0.003,
    fontSize: Math.min(width, height) * 0.05,
    fontWeight: 'bold',
    color: '#333333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.003,
  },
  productPrice: {
    fontSize: Math.min(width, height) * 0.05,
    fontWeight: 'bold',
    marginRight: width * 0.02,
    color: '#333333',
  },
  originalPrice: {
    fontSize: Math.min(width, height) * 0.035,
    color: '#0975b0',
    textDecorationLine: 'line-through',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: height * 0.003,
  },
  ratingreviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewCount: {
    fontSize: Math.min(width, height) * 0.03,
    color: '#666666',
    marginLeft: width * 0.01,
  },
});

export default ProductPage;
