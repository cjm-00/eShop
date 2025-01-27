import { useEffect, useState } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

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
