import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([1, 2, 3]);

  const value = {
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
