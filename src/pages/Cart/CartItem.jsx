import classes from "./CartItem.module.scss";
import junith from "../../assets/JunithEruita.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const CartItem = ({ data, decreaseQty, increaseQty, removeItem }) => {
  return (
    <>
      <div className={classes.container}>
        <Link to={`/product/${data.product.id}`}>
          <img className={classes.image} src={data.product.imageUrl} />
        </Link>
        <div className={classes.details}>
          <Link to={`/product/${data.product.id}`}>
            <h3 className={classes.name}>{data.product.name}</h3>
          </Link>
          <h3 className={classes.variant}>{data.cartVariant}</h3>
          <h3 className={classes.price}>${data.cartPrice.toFixed(2)}</h3>
          <div className={classes.qtyContainer}>
            <h3 className={classes.qty}>QTY: </h3>

            {data.qty == 1 ? (
              <button className={classes.disabledChange}>-</button>
            ) : (
              <button className={classes.qtyChange} onClick={decreaseQty}>
                -
              </button>
            )}

            {/* <input className={classes.qtyInput} type="text" value={data.qty} /> */}
            <p className={classes.qtyInput}>{data.qty}</p>

            {data.qty == data.product.inStock ? (
              <button className={classes.disabledChange}>+</button>
            ) : (
              <button className={classes.qtyChange} onClick={increaseQty}>
                +
              </button>
            )}
          </div>
          <button className={classes.remove} onClick={removeItem}>
            REMOVE
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
