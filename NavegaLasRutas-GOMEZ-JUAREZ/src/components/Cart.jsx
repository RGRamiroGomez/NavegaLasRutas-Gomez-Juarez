import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import { Button } from './Button'
import { Link } from 'react-router-dom'
export const Cart = () => {
    const{cart,vaciarCart}=useContext(CartContext)
    
    return (
        <div className='cart'>
            {cart? cart.map((e)=><CartItem key={e.id} prod={e}/>) : <p>Aqui encontras los productos</p>}
            {cart? <Button color="white" funcion={()=>vaciarCart()}>Vaciar Carrito</Button> : <Link to='/'>Ir a comprar!</Link>}
        </div>
    )
}
