import classes from "./CartItem.module.css";
import { useState } from "react";

const CartItem = (props) => {
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

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.actions}>
        <span>{props.price}</span>
        <span>{props.menuItem}</span>
        <button onClick={decrementNum}>−</button>
        <div className={classes.amount}>{number}</div>
        <button onClick={addNum}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
