import Header from "../src/components/Layout/Header";
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/Cart-Context";
import Resturants from "./components/Resturants/Resturants";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const cartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };

  return (
    <CartContext>
      {cartOpen && <Cart onCloseApp={hideCartHandler} />}
      <Header onShowCart={cartHandler} />       
      <Resturants />
    </CartContext>
  );
}

export default App;
