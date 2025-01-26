import classes from "./Header.module.scss";
import cartIcon from "../../assets/cartRed.svg";

const Header = () => {
  return (
    <>
      <div className={classes.cartContainer}>
        <a href="/cart">
          <img className={classes.cartIcon} src={cartIcon} />
        </a>
      </div>
      <a href="/">
        <h1 className={classes.heading}>WARHAMMER</h1>
      </a>
    </>
  );
};

export default Header;
