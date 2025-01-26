import classes from "./ProductCard.module.scss";
import junith from "../../assets/JunithEruita.jpg";

const ProductCard = () => {
  return (
    <>
      <div className={classes.card}>
        <a href="/productPage">
          <img className={classes.photo} src={junith} />
        </a>
        <div className={classes.details}>
          <h2 className={classes.name}>Junith Eruita</h2>
          <h3 className={classes.price}>$90.00</h3>
          <h3 className={classes.brand}>Adepta Sororitas</h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
