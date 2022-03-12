import classes from "./Cart.module.css";
import Modal from "./Modal";
import Card from "../Resturants/Card";
import { CartState } from "../../store/Cart-Context";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart = (props) => {
  const { state: { cart }, dispatch } = CartState();
  
  const [number, setNumber] = useState(0)
  
  const addNum = () =>{
   setNumber((prevState) => {
     return prevState+1})   
  }

  const decrementNum = () =>{
    if (number<=0) return 
    setNumber((prevState)=>{
      return prevState-1})   
   }

   console.log(cart)
  
  const cartItem = cart.map((res) => (
    <Card
      key={res.id}
      heading={res.name}
      image={res.imageSmallUrl}
      text={res.description}
    />
  ));

  const cartIsEmpty = cart.length === 0

  return (
    <Modal onCloseM={props.onCloseApp}>
      <div className={classes.actions}>
        <span> {cartItem}</span>
        <span>
          {cart.map((item) =>
            item.menu.map((el) => (
              <CartItem key={el.id} price={`$${el.price}`} menuItem={el.name} amount={number} onAdd={addNum} onRemove={decrementNum}/>
            ))
          )}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} disabled={cartIsEmpty} onClick={props.onCloseApp} onClick={() => {
           dispatch({
            type: "REMOVE_FROM_CART",
            payload: cart[0],
          });
        }}>
          Order Now
        </button>
      </div>
      {cartIsEmpty && <div>Please click on a Resturant of your choice</div>}
    </Modal>
  );
};

export default Cart;
