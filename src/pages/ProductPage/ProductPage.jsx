import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/product-services";
import classes from "./ProductPage.module.scss";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProducts().then((data) => setProductData(data));
  }, []);

  const productDetails = productData.find((entry) => entry.id === id);

  return (
    <>
      <Header />
      {productDetails ? (
        <ProductDetails data={productDetails} />
      ) : (
        <p className={classes.loading}>Loading...</p>
      )}
    </>
  );
};

export default ProductPage;
