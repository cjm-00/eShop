import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
  const { cartList, updateCartList } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  // const addToCart = () => {
  //   updateCartList([...cartList, { productId: data.id, qty: 1 }]);
  // };

  const removeItem = (productId) => {
    // console.log(productId);
    updateCartList((prevCartList) =>
      prevCartList.filter((item) => item.product.id !== productId)
    );
  };

  const clearCart = () => {
    updateCartList([]);
  };

  const increaseQty = (productId) => {
    // console.log(productId);

    updateCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.product.id === productId && item.qty <= item.product.inStock
          ? {
              ...item,
              qty: item.qty + 1,
              cartPrice: (item.qty + 1) * item.product.price, // Ensure new qty is used
            }
          : item
      )
    );
  };

  const decreaseQty = (productId) => {
    // console.log(productId);

    updateCartList((prevCartList) =>
      prevCartList.map((item) =>
        item.product.id === productId && item.qty > 1
          ? {
              ...item,
              qty: item.qty - 1,
              cartPrice: (item.qty - 1) * item.product.price, // Use new qty
            }
          : item
      )
    );
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
          <CartItem
            key={item.product.id}
            data={item}
            decreaseQty={() => decreaseQty(item.product.id)}
            increaseQty={() => increaseQty(item.product.id)}
            removeItem={() => removeItem(item.product.id)}
          />
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
