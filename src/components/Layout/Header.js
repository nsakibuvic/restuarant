import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { CartState } from "../../store/Cart-Context";

const Header = (props) => {
  const {state: { cart }, dispatch } = CartState();

  const submitInputH = (event) =>{
   props.onAddInput(event.target.value)
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Feed Me</h1>        
        <HeaderCartButton onClickHB={props.onShowCart} />
      </header>
      <div className={classes.subHeader}>        
        <span><label>Search</label> <input onChange={submitInputH}></input> </span>
        <span onClick={props.randomSelection}>Randomly Selection</span>
        <span onClick={props.priceSelection}>Price Section</span>
        <span><button className={classes.clearButton} onClick={() => {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: cart[0],
        });
      }}>Clear</button></span>
      </div>
      </Fragment> 
    );
};

export default Header;
