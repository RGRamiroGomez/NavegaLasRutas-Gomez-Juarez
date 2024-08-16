import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from './Button'

export const CartItem = ({prod}) => {
    const {removeFromCart}=useContext(CartContext)
    return (
        <div className='cartItem'>
            <h3>{prod.nombre}</h3>
            <p>{prod.precio}</p>
            <p>{prod.cantidad}</p>
            <Button color="white" funcion={()=>removeFromCart(prod.id)}>Quitar del carrito</Button>
        </div>
    )
}
