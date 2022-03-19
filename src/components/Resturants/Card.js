import classes from "./Card.module.css";
import { CartState } from "../../store/Cart-Context";

const Card = (props) => {
  const { dispatch } = CartState();

  return (
    <div
      className={classes.column}
      onClick={() => {
        dispatch({
          type: "ADD_TO_CART",
          payload: props.dataProp,
        });
      }}
    >
      <div className={classes.card}>
        <h3>{props.heading}</h3>
        <img className={classes.image} src={props.image} alt={props.heading}/>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
