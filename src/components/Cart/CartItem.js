import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.actions}>
        <span>{props.price}</span>
        <span>{props.menuItem}</span>
        <button onClick={props.onRemove}>−</button>
        <div className={classes.amount}>{props.amount}</div>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
