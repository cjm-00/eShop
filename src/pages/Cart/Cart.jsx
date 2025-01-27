import { useContext } from "react";
import Header from "../../components/Header/Header";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
  const { cartList, updateCartList } = useContext(CartContext);

  return (
    <>
      <Header />
      <h1 className={classes.title}>CART</h1>
      <div className={classes.productsContainer}>
        <CartItem />
        {cartList.map((item) => (
          <CartItem key={cartList[i]} data={item} />
        ))}
        <h3 className={classes.total}>Total: $320.00</h3>
      </div>
    </>
  );
};

export default Cart;
