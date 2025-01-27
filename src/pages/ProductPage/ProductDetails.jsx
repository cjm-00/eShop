import classes from "./ProductDetails.module.scss";
import junith from "../../assets/JunithEruita.jpg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductDetails = ({ data }) => {
  const { cartList, updateCartList } = useContext(CartContext);

  const addToCart = () => {
    if (cartList.some((item) => item.product.id === data.id)) {
      cartList.find((item) => item.product.id === data.id).qty++;

      console.log(
        cartList.find((item) => item.product.id === data.id).product.price
      );
    } else {
      updateCartList([...cartList, { product: data, qty: 1 }]);
    }
  };

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  return (
    <>
      <div className={classes.details}>
        <img className={classes.img} src={data.imageUrl} />
        <h1 className={classes.name}>{data.name}</h1>
        <h3 className={classes.price}>Price: ${data.price.toFixed(2)}</h3>
        <h3 className={classes.brand}>{data.faction}</h3>
        <h4 className={classes.stock}>Currently in Stock: {data.inStock}</h4>
        <button className={classes.cartBtn} onClick={() => addToCart(data)}>
          Add to Cart
        </button>
        <p className={classes.description}>{data.desc}</p>
        <button className={classes.showBtn}>Show More</button>
      </div>
    </>
  );
};

export default ProductDetails;
