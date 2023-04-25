import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
