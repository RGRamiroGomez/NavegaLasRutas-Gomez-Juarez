import { useContext, useState , useEffect } from "react"
import { Button } from "./Button"
import { CartContext } from "../context/CartContext"

export const CartQuantity = ({prod}) => {
    const {modificarCantidad}=useContext(CartContext)
    const [count, setCount] = useState(prod.cantidad)
    const sumar = () => {
        setCount(count + 1)
        const newCount = count + 1
        const prodModificado = {...prod,cantidad : newCount}
        modificarCantidad(prodModificado)
    }
    const restar = ()=> {
        if (count > 1) {
            setCount(count - 1)
            const newCount = count - 1
            const prodModificado = {...prod,cantidad : newCount}
            modificarCantidad(prodModificado)
    }
    }

        return (
            <div className="flex flex-row gap-2">
            <Button color="white" funcion={restar} className='w-10 bg-white border-textC border'>-</Button>
            <p>Count: {count}</p>
            <Button color="white" funcion={sumar}>+</Button>
            </div>
    )
    }
