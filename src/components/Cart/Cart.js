import classes from "./Cart.module.css";
import Modal from "./Modal";
import Card from "../Resturants/Card";
import { CartState } from "../../store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const {
    state: { cart },
  } = CartState();

  const cartItem = cart.map((res) => (
    <Card
      key={res.id}
      heading={res.name}
      image={res.imageSmallUrl}
      text={res.description}
    />
  ));

  return (
    <Modal onCloseM={props.onCloseApp}>
      <div className={classes.actions}>
        <span> {cartItem}</span>
        <span>
          {cart.map((item) =>
            item.menu.map((el) => (
              <CartItem key={el.id} price={`$${el.price}`} menuItem={el.name} amount={0}/>
            ))
          )}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseApp}>
          Order Now
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
