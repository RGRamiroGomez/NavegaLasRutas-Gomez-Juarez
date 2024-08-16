import { useContext, useState , useEffect } from "react"
import { Button } from "./Button"
import { CartContext } from "../context/CartContext"

export const ItemCount = ({prod}) => {
    const {cart,setCart,addToCart,vaciarCart,removeFromCart}=useContext(CartContext)
    const [vacio,setVacio]=useState(true)
    const [count, setCount] = useState(0)
    useEffect(() => {
        setVacio(true)
        setCount(0)
    }, [prod])
    const sumar = () => {
        setCount(count + 1)
        if(vacio){
            setVacio(false)
        }
    }
    const restar = ()=> {
        if (count > 1) {
            setCount(count - 1)
        } else {
            setCount(0)
            setVacio(true)
        }
    }

    const prodCant={...prod,cantidad:count}

    if (vacio){
        return(
            <Button color="white" funcion={sumar}>+</Button>
        )
    }else{

        return (
            <div className="itemCount">
            <Button color="white" funcion={restar}>-</Button>
            <p>Count: {count}</p>
            <Button color="white" funcion={sumar}>+</Button>
            <Button color="white" funcion={()=>addToCart(prodCant)}>Agregar al Carrito</Button>
        </div>
    )
    }
}
