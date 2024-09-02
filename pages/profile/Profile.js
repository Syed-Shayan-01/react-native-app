import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Profile = () => {
  const insets = useSafeAreaInsets();

  const Data = [
    {
      id: 1,
      name: 'My Orders',
      details: 'Already have 2 orders',
      icon: 'shopping-cart',
    },
    {
      id: 2,
      name: 'Shipping Address',
      details: '3 addresses',
      icon: 'map-marker',
    },
    {
      id: 3,
      name: 'Payment Methods',
      details: '749832947',
      icon: 'credit-card',
    },
    {
      id: 4,
      name: 'Help & Support',
      details: 'Contact Us',
      icon: 'question-circle',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemContent}>
        <Icon name={item.icon} style={styles.listItemIcon} />
        <View style={styles.listItemText}>
          <Text style={styles.listItemTitle}>{item.name}</Text>
          <Text style={styles.listItemDetails}>{item.details}</Text>
        </View>
      </View>
      <Icon name="angle-right" style={styles.listItemArrow} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F4F8" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={require('../../public/images/profile.jpg')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Syed Shayan</Text>
          <Text style={styles.profileEmail}>shayansyed712@gmail.com</Text>
        </View>
      </View>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  headerTitle: {
    fontSize: Math.min(width, height) * 0.07,
    fontWeight: 'bold',
    color: '#333333',
  },
  searchButton: {
    padding: 10,
  },
  searchIcon: {
    fontSize: 24,
    color: '#666666',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: Math.min(width, height) * 0.2,
    height: Math.min(width, height) * 0.2,
    borderRadius: Math.min(width, height) * 0.1,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  profileInfo: {
    marginLeft: width * 0.05,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: Math.min(width, height) * 0.05,
    color: '#333333',
  },
  profileEmail: {
    color: '#666666',
    fontSize: Math.min(width, height) * 0.03,
  },
  list: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: height * 0.02,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemIcon: {
    fontSize: Math.min(width, height) * 0.06,
    color: '#4A90E2',
    width: width * 0.1,
  },
  listItemText: {
    marginLeft: width * 0.03,
  },
  listItemTitle: {
    fontSize: Math.min(width, height) * 0.04,
    fontWeight: 'bold',
    color: '#333333',
  },
  listItemDetails: {
    color: '#666666',
    fontSize: Math.min(width, height) * 0.03,
  },
  listItemArrow: {
    fontSize: Math.min(width, height) * 0.05,
    color: '#666666',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: width * 0.15,
  },
});

export default Profile;