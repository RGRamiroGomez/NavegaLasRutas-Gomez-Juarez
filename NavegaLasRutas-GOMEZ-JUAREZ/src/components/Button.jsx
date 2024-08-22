export const Button = ({color,funcion,children}) => {

    return (
        <button onClick={funcion} className='min-w-9 bg-white border-textC border rounded'>{children}</button>  
    )     
}

