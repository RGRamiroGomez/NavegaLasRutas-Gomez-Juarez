import { Link } from 'react-router-dom'
import { SelectCategoria } from './SelectCategoria'

export const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to="/">
                <h1>eGarden</h1>
                <img src="/logoSprout.svg" alt="logo eGarden (brote)"  className='logo'/>
            </Link>
            <SelectCategoria></SelectCategoria>
            
            <Link to='/carrito'><img src="/logoCart.svg" alt="logo carrito de compra" className='cartLogo'/></Link>
        </nav>
    )
}

