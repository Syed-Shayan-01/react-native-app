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
const {width, height} = Dimensions.get('window');

const BuyPage = () => {
  const Data = [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/813aV273-rL._SY466_.jpg',
      title: 'Item Name',
      description: 'This is a detailed description of the item.',
      price: 99.99,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Text>
          <IonIcon name="arrow-back" style={styles.menuicon} />
        </Text>
        <Text style={styles.userIcon}>
          <IonIcon name="share-social" style={styles.userIcon} />
        </Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require('../../public/images/apple.jpg')}
        />
      </View>

      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 20,
          zIndex: 999,
        }}>
        <View style={styles.textTitleContain}>
          <Text style={styles.title}>Item Name</Text>
          <Text style={styles.price}>$99.99</Text>
        </View>
        <Text style={styles.description}>
          This is a detailed description of the item. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed vel libero vel erat feugiat
          semper. Nullam faucibus, justo vel tristique malesuada, urna libero
          vestibulum justo,
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 1,
              color: 'black',
              padding: Math.min(width, height) * 0.04,
            }}>
            <Text>Shipping info</Text>
            <Text>
              <AntDesign name="right" />
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              color: 'black',
              padding: Math.min(width, height) * 0.04,
            }}>
            <Text>Support</Text>
            <Text>
              <AntDesign name="right" />
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    color: 'black',
  },
  userIcon: {
    fontSize: 25,
    padding: 6,
    borderRadius: 100,
    color: 'black',
  },
  image: {
    width: width,
    height: height * 0.45,
    alignSelf: 'center',
    resizeMode: 'cover',
    position: 'relative',
  },
  textTitleContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: width * 0.04,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: width * 0.04,
  },
  description: {
    fontSize: Math.min(width, height) * 0.04,
    marginVertical: height * 0.02,
    textAlign: 'justify',
    color: '#5e5e5e',
    marginHorizontal: width * 0.04,
  },
});

export default BuyPage;
