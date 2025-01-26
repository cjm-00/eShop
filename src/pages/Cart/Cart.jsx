import Header from "../../components/Header/Header";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <>
      <Header />
      <h1 className={classes.title}>CART</h1>
      <div className={classes.productsContainer}>
        <CartItem />
        <CartItem />
        <CartItem />
        <h3 className={classes.total}>Total: $320.00</h3>
      </div>
    </>
  );
};

export default Cart;
