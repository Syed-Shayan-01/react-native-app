import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to the cart
  const addToCart = item => {
    const itemWithQuantity = {...item, quantity: item.quantity || 1};
    setCartItems(prevItems => [...prevItems, itemWithQuantity]);
  };

  // Function to remove item from the cart
  const removeFromCart = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Function to update the quantity of an item in the cart
  const updateCartQuantity = (itemId, newQuantity) => {
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1; // Default to 1 if invalid quantity
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? {...item, quantity: newQuantity} : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, updateCartQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
