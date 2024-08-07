export const Button = ({color,funcion,children}) => {

    return (
        <button style={{backgroundColor:color}} onClick={funcion}>{children}</button>  
    )     
}

