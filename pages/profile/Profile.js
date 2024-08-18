import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
const Profile = () => {
  const Data = [
    {
      id: 1,
      name: 'My Orders',
      details: 'Already have 2 roders',
    },
    {
      id: 2,
      name: 'Shipping Address',
      details: '3 adressess',
    },
    {
      id: 3,
      name: 'Payment Methods',
      details: '749832947',
    },
    {
      id: 4,
      name: 'Help & Support',
      details: 'Contact Us',
    },
  ];
  return (
    <>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Icon name="search" style={styles.menuicon} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontSize: Math.min(width, height) * 0.09,
            fontWeight: 'bold',
            color: '#333333',
            marginVertical: height * 0.02,
            marginHorizontal: width * 0.05,
          }}>
          My Profile
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginRight: width * 0.05,
            marginVertical: height * 0.015,
          }}>
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: '#666',
              }}
              source={require('../../public/images/profile.jpg')}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: Math.min(width, height) * 0.06,
                color: '#333333',
              }}>
              Syed Shayan
            </Text>
            <Text style={{color: '#666666'}}>shayansyed712@gmail.com</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: height * 0.01,
                marginHorizontal: width * 0.05,
                borderTopColor: '#666666',
                borderTopWidth: 1,
                paddingVertical: height * 0.02,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: Math.min(width, height) * 0.05,
                    fontWeight: 'bold',
                    color: '#333333',
                  }}>
                  {item.name}
                </Text>
                <Text style={{color: '#666666'}}>{item.details}</Text>
              </View>
              <View>
                <Icon
                  style={{
                    fontSize: Math.min(width, height) * 0.05,
                    fontWeight: 'bold',
                    color: '#333333',
                  }}
                  name={'angle-right'}
                />
              </View>
            </View>
          );
        }}
      />
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.06,
  },
  menuicon: {
    textAlign: 'right',
    fontSize: 20,
    color: '#666666',
  },
});
