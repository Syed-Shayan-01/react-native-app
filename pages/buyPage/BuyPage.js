import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Link, useRoute} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const BuyPage = () => {
  const {params} = useRoute();

  const Data = [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/813aV273-rL._SY466_.jpg',
      title: 'Item Name',
      description: 'This is a detailed description of the item.',
      price: 99.99,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.navbar}>
          <Link to={'/Home'}>
            <IonIcon name="arrow-back" style={styles.menuicon} />
          </Link>
          <Text style={styles.userIcon}>
            <IonIcon name="share-social" style={styles.userIcon} />
          </Text>
        </View>
        <View>
          <Image style={styles.image} source={{uri: params?.item?.image}} />
        </View>

        <View
          style={{
            paddingTop: 20,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: Math.min(width, height) * 0.04,
              }}>
              <Text style={{ fontSize: 10}}>Size</Text>
              <Text style={{ fontSize: 10}}>Color</Text>
              <TouchableOpacity>
                <FeatherIcon name="heart" size={24} color="#333333" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textTitleContain}>
            <Text style={styles.title}>{params?.item?.title}</Text>
            <Text style={styles.price}>${params?.item?.price}</Text>
          </View>
          <Text style={styles.description}>{params?.item?.description}</Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopWidth: 1.2,
                color: '#333333',
                borderColor: '#666666',
                padding: Math.min(width, height) * 0.04,
              }}>
              <Text style={{color: '#333333'}}>Shipping info</Text>
              <Text style={{color: '#333333'}}>
                <AntDesign name="right" />
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopWidth: 1.2,
                borderBottomWidth: 1,
                color: '#333333',
                borderColor: '#666666',
                padding: Math.min(width, height) * 0.04,
              }}>
              <Text style={{color: '#333333'}}>Support</Text>
              <Text style={{color: '#333333'}}>
                <AntDesign name="right" />
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flexGrow: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    alignItems: 'center',
  },
  menuicon: {
    fontSize: 30,
    color: '#666666',
  },
  userIcon: {
    fontSize: 25,
    padding: 6,
    borderRadius: 100,
    color: '#666666',
  },
  image: {
    width: width,
    height: height * 0.45,
    alignSelf: 'center',
    resizeMode: 'center',
    position: 'relative',
  },
  textTitleContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginHorizontal: width * 0.04,
    width: width * 0.7,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginHorizontal: width * 0.04,
  },
  description: {
    fontSize: Math.min(width, height) * 0.04,
    marginVertical: height * 0.02,
    textAlign: 'justify',
    color: '#666666',
    marginHorizontal: width * 0.04,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 50,
  },
  addToCartButton: {
    backgroundColor: '#0975b0',
    // alignContent: 'center',
    padding: 15,
    borderRadius: 5,
    width: width * 0.9,
  },
  //   flex: 1,
  //   backgroundColor: '#0975b0',
  //   padding: 15,
  //   borderRadius: 5,
  //   alignItems: 'center',
  // },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',

    fontWeight: 'bold',
    color: 'white',
  },
});

export default BuyPage;
