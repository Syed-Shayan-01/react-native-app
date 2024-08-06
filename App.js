import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import Signup from './pages/signup/Signup';
import TitlePage from './pages/titlePage/TitlePage';
import HomePage from './pages/homePage/HomePage';
import BuyPage from './pages/buyPage/BuyPage';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BuyPage"
            component={BuyPage}
            options={{headerShown: false}}
          />
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
            name="Home"
            component={HomePage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
