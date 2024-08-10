import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Cart = () => {
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
      <FlatList
        data={[1]}
        renderItem={() => {
          return (
            <SafeAreaView style={{flexDirection: 'row'}}>
              <View>
                <Image
                  style={{width: width * 0.2, height: height * 0.1}}
                  source={require('../../public/images/apple.jpg')}
                />
              </View>
              <View style={{marginHorizontal: width * 0.04}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: Math.min(width, height) * 0.05,
                  }}>
                  Apple Handfree
                </Text>
                <View style={{flexDirection: 'row', alignItems: "center",}}>
                  <Text>
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
                  <Text>
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
              </View>
            </SafeAreaView>
          );
        }}
      />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
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
  cartContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 20,
  },
});
