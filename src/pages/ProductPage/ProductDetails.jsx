import classes from "./ProductDetails.module.scss";
import junith from "../../assets/JunithEruita.jpg";

const ProductDetails = () => {
  return (
    <>
      <div className={classes.details}>
        <img className={classes.img} src={junith} />
        <h1 className={classes.name}>Junith Eruita</h1>
        <h3 className={classes.price}>Price: $90.00</h3>
        <h3 className={classes.brand}>Adepta Sororitas</h3>
        <p className={classes.description}>
          Junith Eruita sweeps into battle wreathed in holy fire and holding
          high the Mace of Castigation. Riding within the Pulpit of Saint
          Holline’s Basilica, she hovers across the battlefield upon thrumming
          waves of holy ene...
        </p>
        <button className={classes.showBtn}>Show More</button>
      </div>
    </>
  );
};

export default ProductDetails;
