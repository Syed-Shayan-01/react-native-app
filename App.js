import React, {useEffect} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './pages/Login/Login';
import Signup from './pages/signup/Signup';
import TitlePage from './pages/titlePage/TitlePage';
import HomePage from './pages/homePage/HomePage';
import BuyPage from './pages/buyPage/BuyPage';
import Profile from './pages/profile/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {height, width} = Dimensions.get('window')
const TabBarIcon = ({focused, color, size, name}) => {
  const animatedValue = new Animated.Value(1);

  if (focused) {
    Animated.spring(animatedValue, {
      toValue: 1.2,
      friction: 2,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View style={{transform: [{scale: animatedValue}]}}>
      <Icon name={name} size={size} color={color} />
    </Animated.View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
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
        // tabBarActiveTintColor: '#0975b0',
        // tabBarInactiveTintColor: '#666666',
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
        component={BuyPage}
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

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="TitlePage"
          component={TitlePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    borderRadius: 10
  },
  tabBarItem: {
    paddingTop: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default App;
