import { useState } from "react"
import { Button } from "./Button"

export const ItemCount = () => {
    const [count, setCount] = useState(1)
    const sumar = () => {
        setCount(count + 1)
    }
    const restar = ()=> {
        setCount(count - 1)
    }
    return (
        <div className="itemCount">
            <Button color="white" funcion={restar}>-</Button>
            <p>Count: {count}</p>
            <Button color="white" funcion={sumar}>+</Button>
        </div>
    )
}
