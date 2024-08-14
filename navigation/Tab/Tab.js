import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../../pages/homePage/HomePage';
import BuyPage from '../../pages/buyPage/BuyPage';
import Profile from '../../pages/profile/Profile';
import TabBarIcon from '../../components/tabNavigationAnime/TabNaviAnime';
import Cart from '../../pages/cart/Cart';

const Tab = createBottomTabNavigator();
const {height, width} = Dimensions.get('window');


const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <TabBarIcon
              focused={focused}
              color={color}
              size={size}
              name={iconName}
            />
          );
        },
        tabBarActiveTintColor: '#0975b0',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    elevation: 8,
    height: 60,
    paddingBottom: 5,
    marginVertical: height * 0.01,
    marginHorizontal: width * 0.01,
    borderRadius: 10,
  },
  tabBarItem: {
    paddingTop: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default TabNavigator;
