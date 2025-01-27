import classes from "./CartItem.module.scss";
import junith from "../../assets/JunithEruita.jpg";
const CartItem = ({ data }) => {
  return (
    <>
      <div className={classes.container}>
        <a href="/productPage">
          <img className={classes.image} src={junith} />
        </a>
        <div className={classes.details}>
          <a href="/productPage">
            <h3 className={classes.name}>Junith Eruita</h3>
          </a>
          <h3 className={classes.price}>$90.00</h3>
          <div className={classes.qtyContainer}>
            <h3 className={classes.qty}>QTY: </h3>
            <input className={classes.qtyInput} type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
