import { Link } from 'react-router-dom'
import { SelectCategoria } from './SelectCategoria'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <nav className='flex flex-row justify-between p-10'>
            <Link to="/" style={{textDecoration:'none'}} className='link'>
                <h1 className='font-bold'>eGarden</h1>
                <img src="/logoSprout.svg" alt="logo eGarden (brote)"  className='w-1/8'/>
            </Link>
            <SelectCategoria></SelectCategoria>
            <CartWidget/>
        </nav>
    )
}

