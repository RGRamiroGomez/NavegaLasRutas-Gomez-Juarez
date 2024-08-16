import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
export const CartWidget = () => {
    const {cart}=useContext(CartContext)

    return (
        <div className='cartWidget'>
            <Link to='/carrito'><img src="/logoCart.svg" alt="logo carrito de compra" className='cartLogo' style={{textDecoration:'none'}}/></Link>
            {cart.length ? <p>{cart.length}</p> : <p></p> }
        </div>
    )
}

