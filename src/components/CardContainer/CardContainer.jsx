import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./CardContainer.module.scss";
import { getProducts } from "../../services/product-services";
import Carousel from "../Carousel/Carousel";

const CardContainer = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProductData(data));
    console.log(featuredProducts);
  }, []);

  const featuredProducts = productData.filter(
    (item) => item.isFeatured == true
  );

  return (
    <>
      <div className={classes.carouselContainer}>
        {/* <Carousel featuredProducts={featuredProducts} /> */}
      </div>
      <div className={classes.container}>
        {productData.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
