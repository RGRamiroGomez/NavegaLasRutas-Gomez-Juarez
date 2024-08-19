import { createContext, useState } from 'react'

export const CartContext=createContext()

export const CartContextProvider = ({children}) => {

    const [cart,setCart]=useState([])
    const addToCart=(prod)=>{
        setCart([...cart,prod])
    }
    const vaciarCart=()=>{
        setCart([])
    }
    const removeFromCart=(id)=>{
        setCart(cart.filter((e)=>e.id!==id))
    }

    return (
        <CartContext.Provider value={{cart,setCart,addToCart,vaciarCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
