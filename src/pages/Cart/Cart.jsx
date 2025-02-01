import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
  const { cartList, updateCartList } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = () => {
    updateCartList([...cartList, { productId: data.id, qty: 1 }]);
  };

  const clearCart = () => {
    updateCartList([]);
  };

  const calculateTotal = () => {
    const totalPrice = cartList.reduce((acc, item) => {
      return acc + item.cartPrice;
    }, 0);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartList]);

  return (
    <>
      <Header />
      <h1 className={classes.title}>CART</h1>
      <div className={classes.productsContainer}>
        {cartList.map((item) => (
          <CartItem key={item.product.id} data={item} />
        ))}
        <h3 className={classes.total}>Total: ${totalPrice.toFixed(2)}</h3>
        <button
          className={classes.clear}
          // onClick={clearCart}
          onClick={() => {
            if (window.confirm("Remove all items from the cart?")) {
              clearCart();
            }
          }}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
