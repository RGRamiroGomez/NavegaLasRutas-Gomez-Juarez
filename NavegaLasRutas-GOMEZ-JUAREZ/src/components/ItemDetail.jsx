import React, { useEffect, useState } from 'react'
import { getProductoById } from '../mockend'
import { useParams } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'
import { ItemCard } from './ItemCard'

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
            <ItemCard producto={item}/>
            <Link to={`/productos/${item.id - 1}`} style={{textDecoration:'none'}}>Ver Anterios</Link>
            <Link to={`/productos/${item.id + 1}`} style={{textDecoration:'none'}}>Ver Siguiente</Link>
        </div>
    )
}
}
