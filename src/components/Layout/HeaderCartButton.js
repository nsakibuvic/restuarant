import classes from "./HeaderCartButton.module.css";
import { FaBitbucket } from "react-icons/fa";
import { CartState } from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const {
    state: { cart },
  } = CartState();
  return (
    <button className={classes.button} onClick={props.onClickHB}>
      <span className={classes.icon}><FaBitbucket /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default HeaderCartButton;
