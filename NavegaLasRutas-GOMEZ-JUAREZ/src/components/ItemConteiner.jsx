import { useEffect, useState } from "react"
import { ItemCard } from "./ItemCard"
import { getProductos } from "../mockend"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import _ from 'lodash'
export const ItemConteiner = () => {
    const [items, setItems] = useState([])
    const [load,setLoad]=useState(true)
    const {categoria}=useParams() 
    const shuffleItems=_.shuffle(items)

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
            {shuffleItems.map((e)=>(<><ItemCard key={e.id} producto={e}></ItemCard>
        <Link to={`/productos/${e.id}`} style={{textDecoration:'none'}} className="link">Ver Detalle</Link></>))}
        </div>
    )
}

