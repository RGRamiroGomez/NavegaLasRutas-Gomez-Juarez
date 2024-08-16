import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'

export const Cart = () => {
    const{cart}=useContext(CartContext)
    
    return (
        <div className='cart'>
            {cart.map((e)=><CartItem key={e.id} prod={e}/>)}
        </div>
    )
}
