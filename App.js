import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // You may need to install this package
import AntIcon from 'react-native-vector-icons/AntDesign';
import Login from './pages/Login/Login';
import Signup from './pages/signup/Signup';
import TitlePage from './pages/titlePage/TitlePage';
import HomePage from './pages/homePage/HomePage';
import BuyPage from './pages/buyPage/BuyPage';
import Profile from './pages/profile/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return the appropriate icon component
          return (
            <>
              <Icon name={iconName} size={size} color={color} />
            </>
          );
        },
        tabBarActiveTintColor: '#0975b0',
        tabBarInactiveTintColor: '#666666',
        tabBarActiveBackgroundColor: '#d7f0fc',
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
        name="profile"
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
        {/* <Stack.Screen
          name="BuyPage"
          component={BuyPage}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
