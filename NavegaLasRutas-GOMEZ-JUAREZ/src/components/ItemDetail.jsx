import React, { useEffect, useState } from 'react'
import { getProductoById } from '../mockend'
import { useParams } from 'react-router-dom'

export const ItemDetail = () => {
    const[item,setItem]=useState({})
    const[load,setLoad]=useState(true)
    const {id}=useParams()
    useEffect(()=>{
        setLoad(true)
        getProductoById(id*1)
        .then((res)=>setItem(res))
        .then(setLoad(false))},[id])
    
    if(load){
        return(
            <h2>Cargando...</h2>
        )
    }
    return (
        <div>
            <h2>{item.nombre}</h2>
            <p>{item.precio}</p>
            <p>{item.categoria}</p>
        </div>
    )
}
