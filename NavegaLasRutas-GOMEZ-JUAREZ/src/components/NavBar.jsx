import { Link } from 'react-router-dom'
import { SelectCategoria } from './SelectCategoria'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to="/" style={{textDecoration:'none'}}>
                <h1>eGarden</h1>
                <img src="/logoSprout.svg" alt="logo eGarden (brote)"  className='logo'/>
            </Link>
            <SelectCategoria></SelectCategoria>
            <CartWidget/>
        </nav>
    )
}

