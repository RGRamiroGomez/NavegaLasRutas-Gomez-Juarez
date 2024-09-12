import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'
import { ItemCard } from './ItemCard'
import { db } from '../firebase'
import { getDoc, doc, getDocs , collection } from 'firebase/firestore'

export const ItemDetail = () => {
    const[item,setItem]=useState({});
    const[load,setLoad]=useState(true);
    const {id}=useParams()
    const [prevItemId, setPrevItemId] = useState(null);
    const [nextItemId, setNextItemId] = useState(null);
    const getProductById=async()=>{
        try{
            const querySnapshot= await getDoc(doc(db,'Items',id))
            const prod= querySnapshot.data()
            setItem(prod)

            const itemsSnapshot = await getDocs(collection(db, 'Items'));

            const currentIndex = itemsSnapshot.docs.findIndex((doc) => doc.id === id);
            if (currentIndex > 0) {
                setPrevItemId(itemsSnapshot.docs[currentIndex - 1].id);
            }
            if (currentIndex < itemsSnapshot.docs.length - 1) {
                setNextItemId(itemsSnapshot.docs[currentIndex + 1].id);
            }
        }catch(err){
            console.log(err)
        }finally{
            setLoad(false)
        }
    }
    useEffect(()=>{
        getProductById()
        // getProductoById(id)
        // .then((res)=>setItem(res))
        // .finally(setLoad(false))
    },[id] )


    
    if(load){
        return(
            <h2>Cargando...</h2>
        )
    }else{
    return (
        <div>
            <ItemCard producto={item}/>
            <Link to={`/productos/${prevItemId}`} style={{textDecoration:'none'}} className='link'>Ver Anterios</Link>
            <Link to={`/productos/${nextItemId}`} style={{textDecoration:'none'}} className='link'>Ver Siguiente</Link>
        </div>
    )
}
}
