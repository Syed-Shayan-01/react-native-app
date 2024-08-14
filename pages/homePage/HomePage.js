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
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AntDesign} from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

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
const HomePage = () => {
  const [data, setData] = useState([]); // State to hold the fetched data (array)
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        setData(response.data); // Set the array of books
      } catch (err) {
        setError(err); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{marginVertical: width * 0.5}} // Adjust margin based on your layout
      />
    );
  }

  if (error) {
    return <Text>Error: {error.message}</Text>; // Show error message if an error occurs
  }

  if (data.length === 0) {
    return <Text>No data available</Text>; // Handle case where no data is available
  }

  // Render each item in the FlatList
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={{uri: item.image}} // Use the image URL from the API response
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.author}>Author: {item.author || 'Unknown'}</Text>
        <Text style={styles.rating}>
          {item.rating?.rate || 'No rating'} Based on
          {item.rating?.count || '0'} Reviews
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Text style={styles.buttonText}>Buy Now</Text>
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
                      <Text style={styles.textRecommend}>Categories</Text>
                      <FlatList
                        data={Data}
                        renderItem={({item}) => (
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
    color: '#666666',
  },
  homeTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
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
  rating: {
    fontSize: 12,
    color: '#666666',
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
