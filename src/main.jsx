import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CartContextProvider>
        <App className='bg-lime-100'/>
      </CartContextProvider>  
  </React.StrictMode>
)
