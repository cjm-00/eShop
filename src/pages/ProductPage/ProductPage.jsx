import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductDetails from "./ProductDetails";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../services/product-services";
import { CartContext } from "../../context/CartContext";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts().then((data) => setProductData(data));
  }, []);

  const productDetails = productData.find((entry) => entry.id === id);
  console.log(productDetails);

  return (
    <>
      <Header />
      {productDetails ? (
        <ProductDetails data={productDetails} />
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default ProductPage;
