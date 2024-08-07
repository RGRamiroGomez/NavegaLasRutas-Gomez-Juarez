import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='NavBar'>
            <div>
                <h1>eGarden</h1>
                <img src="/logoSprout.svg" alt="logo eGarden (brote)"  className='logo'/>
            </div>
            <label htmlFor="categorias">Categorias: </label>
            <select name="categorias" id="categorias" >
                <option value=""></option>
                <option value="semillas">
                    <Link to='/categorias/semillas'>Semillas</Link>
                </option>
                <option value="macetas">
                    <Link to='/categorias/macetas'>Macetas</Link>
                </option>
                <option value="fertilizantes y pesticidas">
                    <Link to='/categorias/fertilizantesPesticidas'>Fertilizantes y pesticidas</Link>
                </option>
            </select>
            <Link to='/carrito'><img src="/logoCart.svg" alt="logo carrito de compra" className='cartLogo'/></Link>
        </nav>
    )
}

