import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./Carousel.module.scss";

const Carousel = ({ featuredProducts }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProducts, setActiveProducts] = useState([]);
  const prevIndex = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const nextIndex = () => {
    if (activeIndex < featuredProducts.length - 3) {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    if (featuredProducts.length > 1) {
      setActiveProducts([
        featuredProducts[0 + activeIndex],
        featuredProducts[1 + activeIndex],
        featuredProducts[2 + activeIndex],
      ]);
    }
    // console.log(activeIndex);
  }, [featuredProducts, activeIndex]);

  return (
    <>
      <div className={classes.carousel}>
        <button className={classes.arrow} onClick={prevIndex}>
          ⮜
        </button>
        <div className={classes.productContainer}>
          {activeProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        <button className={classes.arrow} onClick={nextIndex}>
          ⮞
        </button>
      </div>
    </>
  );
};

export default Carousel;
