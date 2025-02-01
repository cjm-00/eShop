import classes from "./ProductDetails.module.scss";
import junith from "../../assets/JunithEruita.jpg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductDetails = ({ data }) => {
  const { cartList, updateCartList } = useContext(CartContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("");

  const addToCart = () => {
    if (
      cartList.some((item) => item.product.id === data.id) &&
      cartList.some((item) => item.cartVariant == selectedVariant)
    ) {
      cartList.find((item) => item.product.id === data.id).qty++;
      cartList.find((item) => item.product.id === data.id).cartPrice =
        data.price * cartList.find((item) => item.product.id === data.id).qty;
    } else {
      updateCartList([
        ...cartList,
        {
          product: data,
          qty: 1,
          cartPrice: data.price,
          cartVariant: selectedVariant,
        },
      ]);
    }
  };

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  const showDesc = () => {
    setIsExpanded(!isExpanded);
  };
  const handleVariantSelect = (e) => {
    setSelectedVariant(e.target.value);
  };

  return (
    <>
      <div className={classes.details}>
        <img className={classes.img} src={data.imageUrl} />
        <div className={classes.textContainer}>
          <h1 className={classes.name}>{data.name}</h1>
          <h3 className={classes.price}>Price: ${data.price.toFixed(2)}</h3>
          <h3 className={classes.brand}>{data.faction}</h3>
          {data.variants ? (
            <select
              className={classes.selection}
              value={selectedVariant}
              onChange={handleVariantSelect}
            >
              {data.variants.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          ) : (
            ""
          )}

          <h4 className={classes.stock}>Currently in Stock: {data.inStock}</h4>
          <button className={classes.cartBtn} onClick={() => addToCart(data)}>
            Add to Cart
          </button>
          <p className={classes.description}>
            {isExpanded ? data.desc : data.short}
          </p>
          <button className={classes.showBtn} onClick={showDesc}>
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
