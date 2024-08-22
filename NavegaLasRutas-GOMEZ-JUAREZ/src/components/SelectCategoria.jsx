import React from 'react'
import { Link } from 'react-router-dom'
import './SelectCategoria.css'

export const SelectCategoria = () => {
    return (
        <ul className='categorias'>
            <li><Link to="/categorias/semillas" className='no-underline hover:text-lg'>Semillas</Link></li>
            <li><Link to="/categorias/macetas" className='no-underline hover:text-lg' >Macetas</Link></li>
            <li><Link to="/categorias/fertilizantesPesticidas" className='no-underline hover:text-lg'>Fertilizantes y Pesticidas</Link></li>
        </ul>
    )
}

