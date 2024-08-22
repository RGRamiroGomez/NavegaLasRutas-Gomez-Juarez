import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"

export const ItemCard = ({producto}) => {
    
    return (
        <div className='bg-bisque flex flex-col gap-1 justify-between w-full p-2 h-full rounded border-textC border-2'>
            <img src={producto.img} alt={'imagen' + producto.nombre} className="w-1/4 rounded-lg border border-textC"/>
            <h3 className="font-bold">{producto.nombre}</h3>
            <p><b>Precio:</b> {'$'+producto.precio}</p>
            <p><b>Categoria:</b> {producto.categoria=='fertilizantesPesticidas'? 'Fertilizantes y Pesticidas' : producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</p>
            <ItemCount prod={producto}></ItemCount>
            <Link to={`/productos/${producto.id}`} style={{textDecoration:'none'}} className="hover:text-lg">Ver Detalle</Link>
        </div>
        
    )
}
