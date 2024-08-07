import React, { useEffect, useState } from 'react'
import { getProductoById } from '../mockend'
import { useParams } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = () => {
    const[item,setItem]=useState({});
    const[load,setLoad]=useState(true);
    const {id}=useParams()
    useEffect(()=>{
        getProductoById(id*1)
        .then((res)=>setItem(res))
        .finally(setLoad(false))},[id,item]
    )


    
    if(load){
        return(
            <h2>Cargando...</h2>
        )
    }else{
    return (
        <div>
            <h2>{item.nombre}</h2>
            <p>{item.precio}</p>
            <p>{item.categoria}</p>
            <ItemCount/>
            <Link to={`/productos/${item.id - 1}`}>Ver Anterios</Link>
            <Link to={`/productos/${item.id + 1}`}>Ver Siguiente</Link>
        </div>
    )
}
}
