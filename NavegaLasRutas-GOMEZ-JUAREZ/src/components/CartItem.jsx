import React from 'react'

export const CartItem = ({prod}) => {
    return (
        <div className='cartItem'>
            <h3>{prod.nombre}</h3>
        </div>
    )
}
