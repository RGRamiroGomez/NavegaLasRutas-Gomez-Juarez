import { useEffect, useState } from "react"
import { ItemCard } from "./ItemCard"
import { getProductos } from "../mockend"
import { useParams } from "react-router-dom"

export const ItemConteiner = () => {
    const [items, setItems] = useState([])
    const [load,setLoad]=useState(true)
    const {categoria}=useParams() 

    useEffect(()=>{
        setLoad(true)
        if(categoria){
        getProductos().then(res=>setItems(res.filter(e=>e.categoria==categoria))).then(setLoad(false))
        }else{
            getProductos().then(res=>setItems(res)).then(setLoad(false))
        }
    },[categoria])
    if(load){
        return(
            <h3>Cargando...</h3>
        )
    }
    return (
        <div className='ItemConteiner'>
            {items.map((e)=>(<ItemCard key={e.id} producto={e}></ItemCard>))}
        </div>
    )
}

