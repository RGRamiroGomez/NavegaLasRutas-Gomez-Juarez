import React, { useContext, useState , useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from './Button'
import { CartQuantity } from './CartQuantity'
export const CartItem = ({prod}) => {
    const [productoLive,setProduct] = useState({})
    const {removeFromCart, cart}=useContext(CartContext)
    useEffect(() => {
        const productoLive = cart.find((p) => p.id === prod.id);
        setProduct(productoLive);
      }, [cart, prod.id]);
    return (
        <div className='bg-bisque flex flex-col g-2 justify-between'>
            <h3>{productoLive.nombre}</h3>
            <p>{productoLive.precio}</p>
            <p>{productoLive.cantidad}</p>
            <CartQuantity prod={prod}></CartQuantity>
            <Button color="white" funcion={()=>removeFromCart(prod.id)}> 🗑️</Button>
        </div>
    )
}
