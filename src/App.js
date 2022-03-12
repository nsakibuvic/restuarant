import Header from "../src/components/Layout/Header";
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/Cart-Context";
import Resturants from "./components/Resturants/Resturants";
import { Data } from "./components/Resturants/Data";
import Card from "./components/Resturants/Card";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [randomRes, setRandomRes] = useState(false); 
  const [showAll, setShowAll] = useState(true)
  const cartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };

  const showRandomSelection = () => {
    setRandomRes(!randomRes);
    setShowAll(!showAll)
  };

  const randomNumber = Math.floor(Math.random() * 12);

  return (
    <CartContext>
      {cartOpen && <Cart onCloseApp={hideCartHandler} />}
      <Header onShowCart={cartHandler} randomSelection={showRandomSelection}/>
      {showAll && <Resturants />}
      {randomRes &&
        [Data].map((item) => (
          <Card
            key={item.restaurants[randomNumber].id}
            heading={item.restaurants[randomNumber].name}
            image={item.restaurants[randomNumber].imageSmallUrl}
            text={item.restaurants[randomNumber].description}
            dataProp={item.restaurants[randomNumber]}
          />
        ))}
    </CartContext>
  );
}

export default App;
