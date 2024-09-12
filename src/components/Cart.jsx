import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { CheckoutModal } from './ChekoutModal'
export const Cart = () => {
    const{cart,vaciarCart}=useContext(CartContext)
    const [check,setCheck]=useState(false)
    const mostrarCheckout=()=>{
        setCheck(true)
    }
    
    return (
        <div className='cart'>
            {cart.length ? cart.map((e)=><CartItem key={e.id} prod={e}/>) : <p>Aqui encontras los productos</p>}
            {cart.length ? <Button color="white" funcion={()=>vaciarCart()}>Vaciar Carrito</Button> : <Link to='/' className='link'>Ir a comprar!</Link>}
            <CheckoutModal/>
        </div>
    )
}
