import classes from "./Header.module.scss";
import cartIcon from "../../assets/cartRed.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={classes.cartContainer}>
        <Link to="/cart">
          <img className={classes.cartIcon} src={cartIcon} />
        </Link>
      </div>
      <Link to="/">
        <h1 className={classes.heading}>WARHAMMER</h1>
      </Link>
    </>
  );
};

export default Header;
