import { useContext } from "react"
import { CartContext } from "../context/CartContext"
export const Button = ({color,funcion,children}) => {
    const {modificarCantidad}=useContext(CartContext)
    return (
        <button onClick={funcion} className='min-w-9 bg-white border-textC border rounded'>{children}</button>  
    )     
}

