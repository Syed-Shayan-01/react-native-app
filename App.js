import {CartProvider} from './components/context/CartContext';
import StackNavigator from './navigation/Stack/Stack';

// Main App component
const App = () => {
  return (
    <CartProvider>
      <StackNavigator />
    </CartProvider>
  );
};
export default App;
