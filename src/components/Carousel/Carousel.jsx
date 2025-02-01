import ProductCard from "../ProductCard/ProductCard";
import classes from "./Carousel.module.scss";

const Carousel = ({ featuredProducts }) => {
  return (
    <>
      <div className={classes.carousel}>
        <button className={classes.arrow}>⮜</button>
        <div className={classes.productContainer}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        <button className={classes.arrow}>⮞</button>
      </div>
    </>
  );
};

export default Carousel;
