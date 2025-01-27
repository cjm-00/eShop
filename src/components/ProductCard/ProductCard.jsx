import classes from "./ProductCard.module.scss";
import junith from "../../assets/JunithEruita.jpg";

const ProductCard = ({ data }) => {
  return (
    <>
      <div className={classes.card}>
        <a href={`/product/${data.id}`}>
          <img className={classes.photo} src={data.imageUrl} />
        </a>
        <div className={classes.details}>
          <h2 className={classes.name}>{data.name}</h2>
          <h3 className={classes.price}>${data.price.toFixed(2)}</h3>
          <h3 className={classes.brand}>{data.faction}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
