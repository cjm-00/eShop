import classes from "./CartItem.module.scss";
import junith from "../../assets/JunithEruita.jpg";
import { Link } from "react-router-dom";
const CartItem = ({ data }) => {
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
          <h3 className={classes.price}>${data.product.price.toFixed(2)}</h3>
          <div className={classes.qtyContainer}>
            <h3 className={classes.qty}>QTY: </h3>
            <input className={classes.qtyInput} type="text" value={data.qty} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
