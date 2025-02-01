import classes from "./CartItem.module.scss";
import junith from "../../assets/JunithEruita.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const CartItem = ({ data, increaseQty }) => {
  const removeItem = () => {
    console.log(data.product.id);
  };

  const lowerQty = () => {
    console.log(data.product.id);
  };

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
            <button className={classes.qtyChange} onClick={lowerQty}>
              -
            </button>
            {/* <input className={classes.qtyInput} type="text" value={data.qty} /> */}
            <p className={classes.qtyInput}>{data.qty}</p>
            <button className={classes.qtyChange} onClick={increaseQty}>
              +
            </button>
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
