import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./CardContainer.module.scss";
import { getProducts } from "../../services/product-services";

const CardContainer = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProductData(data));
  }, []);

  // console.log(productData);
  return (
    <div className={classes.container}>
      {productData.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default CardContainer;
