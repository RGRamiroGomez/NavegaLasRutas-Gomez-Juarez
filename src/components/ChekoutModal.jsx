import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import { db } from '../firebase';
import { collection, addDoc  } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
export const CheckoutModal=()=>{
  const {cart}=useContext(CartContext)
  const [writing,setWriting]=useState(false)
  const [orderId,setId]=useState()
  const [Checkout,setCheckout]=useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleOnSubmit=async (event)=>{
    setId('')
    setWriting(true)
    event.preventDefault();
    const formData= new FormData(event.target)
    const data={
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      cart: cart
    }
    setCheckout(data)
    try{
      const docRef=await addDoc(collection(db,'orders'),{Checkout})
      const id=docRef.id;
      setId(id)      
    }
    catch(err){
      console.log(err)
    }
    finally{
      setWriting(false)
    }
  }
  return (
    <div> 
      <Button variant="primary" onClick={handleShow}>
         Confirmar Pedido
      </Button>
      <Modal isOpen={show} onRequestClose={() => setShow(false)} className="flex flex-col w-96 bg-orange-200 border-textC p-1 border-2 rounded align-middle justify-center">
        {orderId ? (
          <>
            <p> Ingresamos su pedido con exito, el ID de su pedido es : {orderId} </p>
          </>):
        (<><h1>Ingrese sus datos</h1>
        {writing ?  
          <div>
            <p>Estamos tomando su pedido</p>
          </div> : 
          <form onSubmit={handleOnSubmit} className='flex flex-col align-center justify-center'>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="telefono">Telefono</label>
            <input type="number" name="telefono" />
            
            <Button type="submit">Terminar Pedido</Button>
          </form> }</>)}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      </Modal>
    </div>
  );
}


/*
<form onSubmit={handleOnSubmit}>
                <label htmlFor="nombre">
                  <input type="text" name="nombre" />
                </label>
                <label htmlFor="email">
                  <input type="email" name="email" />
                </label>
                <label htmlFor="telefono">
                  <input type="number" name="telefono" />
                </label>
                <Button type="submit">Terminar Pedido</Button>
              </form>*/