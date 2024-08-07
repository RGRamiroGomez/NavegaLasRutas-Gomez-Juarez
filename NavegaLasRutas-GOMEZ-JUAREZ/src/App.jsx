import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import  {CartWidget} from './components/CartWidget'
import  {ItemConteiner} from './components/ItemConteiner'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemConteiner/>} />
          <Route path="/carrito" element={<CartWidget/>} />
          <Route path='/categoria/:categoria' element={<ItemConteiner/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
