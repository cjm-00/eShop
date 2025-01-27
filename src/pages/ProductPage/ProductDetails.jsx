import classes from "./ProductDetails.module.scss";
import junith from "../../assets/JunithEruita.jpg";

const ProductDetails = ({ data }) => {
  return (
    <>
      <div className={classes.details}>
        <img className={classes.img} src={data.imageUrl} />
        <h1 className={classes.name}>{data.name}</h1>
        <h3 className={classes.price}>Price: ${data.price.toFixed(2)}</h3>
        <h3 className={classes.brand}>{data.faction}</h3>
        <button type="submit" className={classes.cartBtn}>
          Add to Cart
        </button>
        <p className={classes.description}>{data.desc}</p>
        <button className={classes.showBtn}>Show More</button>
      </div>
    </>
  );
};

export default ProductDetails;
