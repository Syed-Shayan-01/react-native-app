import React, {useEffect, useState} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {Link, useNavigation} from '@react-navigation/native';
import Navbar from '../../components/navbar/Navbar';
const {width, height} = Dimensions.get('window');

const Data = [
  {
    id: 1,
    categories: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    categories: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 3,
    categories: 'electronics',
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  },
  {
    id: 4,
    categories: "women's clothing",
    image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
  },
];

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
const HomePage = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]); // State to hold the fetched data (array)
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/products',
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setData(data);
      } catch (err) {
        console.log('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0975b0"
        style={{marginVertical: width * 0.7}} // Adjust margin based on your layout
      />
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red', fontSize: 18}}>{error.message}</Text>
        <TouchableOpacity onPress={() => setLoading(true)}>
          <Text style={{color: '#0975b0', marginTop: 10}}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (data.length === 0) {
    return <Text>No data available</Text>; // Handle case where no data is available
  }

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={{uri: item.images ? item.images[0] : ''}} // Safeguard against missing images
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title || 'No Title'} {/* Safeguard against missing title */}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          Category: {item.category?.name || 'Unknown'}{' '}
          {/* Update according to your data structure */}
        </Text>
        <View style={styles.ratingreviewContainer}>
          <StarRating rating={item.rating?.rate || 0} />{' '}
          {/* Safeguard against missing rating */}
          <Text style={styles.reviewCount}>({item.rating?.count || 0})</Text>
        </View>
        <Text style={styles.price}>${item.price || 'N/A'}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate('BuyPage', {item})}>
            Buy Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
      <View style={{flex: 1}}>
        <Navbar titleName={'Home'} LinkText={'/TitlePage'} />
        <FlatList
          data={[1, 1]}
          renderItem={({item, index}) => {
            return (
              <View>
                {index === 0 && (
                  <>
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
                      <Text style={styles.textRecommend}>Categories</Text>
                      <FlatList
                        data={Data}
                        renderItem={({item}) => (
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('ProductPage', {
                                category: item.categories,
                              })
                            }>
                            <View
                              style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                                backgroundColor: '#f5f5f5',
                              }}>
                              <Image
                                style={{
                                  width: 70,
                                  height: 70,
                                  borderRadius: 50,
                                  resizeMode: 'center',
                                  marginHorizontal: width * 0.05,
                                  borderColor: 'black',
                                  borderWidth: 1,
                                  elevation: 4, // Adjust as needed for shadow
                                }}
                                source={{uri: item.image}}
                              />
                              <Text
                                style={{
                                  fontSize: Math.min(width, height) * 0.04,
                                  color: '#333333',
                                  textTransform: 'capitalize',
                                  marginVertical: height * 0.01,
                                }}>
                                {item.categories}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                  </>
                )}
                {index === 1 && (
                  <View>
                    <Text style={styles.textRecommend}>Popular Items</Text>
                    <FlatList
                      data={data.slice(1, 5)}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                )}
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Math.min(width, height) * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerTitle: {
    fontSize: Math.min(width, height) * 0.05,
    fontWeight: 'bold',
    color: '#333333',
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
    color: '#666666',
  },
  textRecommend: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.03,
    color: '#333333',
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
    width: width * 0.25,
    height: height * 0.19,
    backgroundColor: 'gray',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
  author: {
    fontSize: 14,
    color: '#666666',
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
