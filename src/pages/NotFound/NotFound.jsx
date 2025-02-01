import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import classes from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className={classes.page}>
        <h1 className={classes.title}>Sorry... Page not found :c</h1>
        <Link to="/" className={classes.link}>
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
