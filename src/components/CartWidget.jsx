import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
export const CartWidget = () => {
    const {cart}=useContext(CartContext)

    return (
        <div className='cartWidget'>
            <Link to='/carrito' className='link'><img src="/logoCart.svg" alt="logo carrito de compra" className='w-10' style={{textDecoration:'none'}}/></Link>
            {cart.length ? <p>{cart.length}</p> : <p></p> }
        </div>
    )
}

