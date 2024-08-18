import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../Tab/Tab';
import TitlePage from '../../pages/titlePage/TitlePage';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/signup/Signup';
import BuyPage from '../../pages/buyPage/BuyPage';
import ReviewPage from '../../pages/Ratings/Ratings';
import Profile from '../../pages/profile/Profile';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
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
          name="BuyPage"
          component={BuyPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ratings"
          component={ReviewPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
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

export default StackNavigator;
