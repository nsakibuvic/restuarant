import React, { createContext, useContext, useReducer } from 'react'; 
import { Data } from '../components/Resturants/Data';
import { cartReducer } from './Reducers';

const CartCtx = createContext(); 

const resData = Data.restaurants.map((el) => el)
console.log(resData, 'Coming from context')

const CartContext = ({children}) => {   
    const [state, dispatch] = useReducer(cartReducer, {        
        cart: []
    })
    return <CartCtx.Provider value ={{state, dispatch}}>{children}</CartCtx.Provider>
}

export default CartContext; 

export const CartState = () => {
    return useContext(CartCtx)
}