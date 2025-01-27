import { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
  const { cartList, updateCartList } = useContext(CartContext);

  const addToCart = () => {
    updateCartList([...cartList, { productId: data.id, qty: 1 }]);
  };

  const clearCart = () => {
    updateCartList([]);
  };

  useEffect(() => {
    console.log(cartList);
  }, cartList);
  return (
    <>
      <Header />
      <h1 className={classes.title}>CART</h1>
      <div className={classes.productsContainer}>
        {/* <CartItem /> */}
        {cartList.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
        <h3 className={classes.total}>Total: ${}</h3>
        <button className={classes.clear} onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
