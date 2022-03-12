import React, { createContext, useContext, useReducer } from 'react'; 
import { Data } from '../components/Resturants/Data';
import { cartReducer } from './Reducers';
import { Provider } from 'react';

const CartCtx = createContext(); 

const resData = [Data].reduce((prev, curr) =>
[...prev, ...curr.restaurants.map((el) => el)]
, [])
console.log(resData, 'Coming from context')

const CartContext = ({children}) => {
    const restuarantList = resData.map(res =>({
    id: res.id,
    heading: res.name,
    image: res.imageSmallUrl, 
    text: res.description,
    menu: res.menu,
    price: res.priceRange
    }))
   
    const [state, dispatch] = useReducer(cartReducer, {
        restaurants: restuarantList, 
        cart: []
    })
    return <CartCtx.Provider value ={{state, dispatch}}>{children}</CartCtx.Provider>
}

export default CartContext; 

export const CartState = () => {
    return useContext(CartCtx)
}