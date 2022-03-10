import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { CartState } from "../../store/Cart-Context";

const Header = (props) => {
  const { dispatch } = CartState();

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Feed Me</h1>        
        <HeaderCartButton onClickHB={props.onShowCart} />
      </header>
      <div className={classes.subHeader}>        
        <span><label>Search</label> <input></input> </span>
        <span>Randomly Selection</span>
        <span>Price Section</span>
        <span><button className={classes.clearButton} onClick={() => {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: props.dataProp,
        });
      }}>Clear</button></span>
      </div>
      </Fragment> 
    );
};

export default Header;
