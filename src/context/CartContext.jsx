import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartList, updateCartList] = useState([]);
  return (
    <CartContext.Provider value={{ cartList, updateCartList }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
