import { ItemCount } from "./ItemCount"

export const ItemCard = ({producto}) => {

    return (
        <div className="ItemCard">
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <ItemCount></ItemCount>
        </div>
    )
}
