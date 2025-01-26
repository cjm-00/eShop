import ProductCard from "../ProductCard/ProductCard";
import classes from "./CardContainer.module.scss";

const CardContainer = () => {
  return (
    <>
      <div className={classes.container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default CardContainer;
