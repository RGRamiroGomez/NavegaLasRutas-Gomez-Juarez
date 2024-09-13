import { createContext, useState } from 'react'


export const CartContext=createContext()

export const CartContextProvider = ({children}) => {

    const [cart,setCart]=useState([])
    const addToCart=(prod)=>{
        const existe = cart.find((p) => p.id === prod.id);
        if (existe) {
                const modificado = { ...existe, cantidad: existe.cantidad + prod.cantidad };
                setCart(cart.map((p) => (p.id === prod.id ? modificado : p)));
        }else{
            setCart([...cart,prod])
        }
    }
    const vaciarCart=()=>{
        setCart([])
    }
    const modificarCantidad=(prod)=>{
        aModificar=cart.find((p)=>p.id === prod.id)
        modificado={...aModificar, cantidad : prod.cantidad}
        setCart(cart.map((p)=> (p.id === prod.id ? modificado : p)))
    }
    const removeFromCart=(id)=>{
        setCart(cart.filter((e)=>e.id!==id))
    }

    return (
        <CartContext.Provider value={{cart,setCart,addToCart,vaciarCart,removeFromCart,modificarCantidad}}>
            {children}
        </CartContext.Provider>
    )
}
