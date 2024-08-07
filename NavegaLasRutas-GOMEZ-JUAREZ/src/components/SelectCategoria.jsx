import React from 'react'
import { Link } from 'react-router-dom'
import './SelectCategoria.css'

export const SelectCategoria = () => {
    return (
        <ul className='categorias'>
            <li><Link to="/categorias/semillas">Semillas</Link></li>
            <li><Link to="/categorias/macetas">Macetas</Link></li>
            <li><Link to="/categorias/fertilizantesPesticidas">Fertilizantes y Pesticidas</Link></li>
        </ul>
    )
}

