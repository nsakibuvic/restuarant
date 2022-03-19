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
  const [showAll, setShowAll] = useState(true);
  const [storeInput, setStoreInput] = useState('');
  const [priceSelection, setpriceSelection] = useState(false);

  const cartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };

  const showRandomSelection = () => {
    setRandomRes(prevState => !prevState);
    setShowAll(prevState => !prevState);
  };

  const randomNumber = Math.floor(Math.random() * 12);

  const submitInputHandler = (inputData) => {
    setStoreInput(inputData)
  }

  console.log([Data].map((item) => item.restaurants.filter((res) => res.name === storeInput)).reduce((prev, curr) => [...prev, ...curr]), 'search')
  console.log([Data].map((item) => item.restaurants.filter((res) => res.priceRange === 0)).reduce((prev, curr) => [...prev, ...curr]), 'price range')

  const outputtingResData = [Data].map((item) => {
    return item.restaurants.filter((res) => res.name === storeInput)
  }).reduce((prev, curr) => [...prev, ...curr])

  const outputPriceSelection = [Data].map((item) => item.restaurants.filter((res) => res.priceRange === 0)).reduce((prev, curr) => [...prev, ...curr])

  const showpriceSelection = () => {
    setpriceSelection(prevState => !prevState);
    setShowAll(prevState => !prevState);
  };

  return (
    <CartContext>
      {cartOpen && <Cart onCloseApp={hideCartHandler} />}
      <Header onShowCart={cartHandler} randomSelection={showRandomSelection} onAddInput={submitInputHandler} priceSelection={showpriceSelection} />
      {showAll && <Resturants restaurants={outputtingResData} />}
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
      {priceSelection &&
        outputPriceSelection.map((item) => (
          <Card
            key={item.id}
            heading={item.name}
            image={item.imageSmallUrl}
            text={item.description}
          />
        ))}
    </CartContext>
  );
}

export default App;
