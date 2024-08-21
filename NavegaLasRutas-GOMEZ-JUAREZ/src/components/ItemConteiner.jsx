import { useEffect, useState } from "react"
import { ItemCard } from "./ItemCard"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import _ from 'lodash'
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
export const ItemConteiner = () => {
    const [items, setItems] = useState([])
    const [load,setLoad]=useState(true)
    const {categoria}=useParams() 
    const shuffleItems=_.shuffle(items)

    const getProductos=async()=>{
        
        if(categoria){
            const prodCat=query(collection(db,'Items'), where("categoria","==",categoria))
            try{
                const querySnapshot= await getDocs(prodCat)
                const prods =querySnapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
                setItems(prods)
            }catch(err){
                console.log(err)
            }finally{
                setLoad(false)
            }
        }else{

            try{
                const querySnapshot= await getDocs(collection(db,'Items'))
                const prods = querySnapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
                setItems(prods)
            }catch(err){
                console.log(err)
            }finally{
                setLoad(false)
            }
        }
    }
    useEffect(()=>{
        getProductos()
        // setLoad(true)
        // if(categoria){
        // getProductos().then(res=>setItems(res.filter(e=>e.categoria==categoria))).then(setLoad(false))
        // }else{
        //     getProductos().then(res=>setItems(res)).then(setLoad(false))
        // }
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

