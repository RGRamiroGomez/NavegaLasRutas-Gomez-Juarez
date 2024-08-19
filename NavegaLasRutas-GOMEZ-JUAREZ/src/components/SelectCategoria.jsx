import React from 'react'
import { Link } from 'react-router-dom'
import './SelectCategoria.css'

export const SelectCategoria = () => {
    return (
        <ul className='categorias'>
            <li><Link to="/categorias/semillas" style={{textDecoration:'none'}} className='link'>Semillas</Link></li>
            <li><Link to="/categorias/macetas" style={{textDecoration:'none'}} className='link'>Macetas</Link></li>
            <li><Link to="/categorias/fertilizantesPesticidas" style={{textDecoration:'none'}} className='link'>Fertilizantes y Pesticidas</Link></li>
        </ul>
    )
}

