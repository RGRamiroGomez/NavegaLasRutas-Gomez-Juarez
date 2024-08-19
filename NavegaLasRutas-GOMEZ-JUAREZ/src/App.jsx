import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import  {ItemConteiner} from './components/ItemConteiner'
import { NavBar } from './components/NavBar'
import { NotFound } from './components/NotFound'
import { ItemDetail } from './components/ItemDetail'
import { Cart } from './components/Cart'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemConteiner/>} />
          <Route path="/carrito" element={<Cart/>} />
          <Route path='/categorias/:categoria' element={<ItemConteiner/>}/>
          <Route path='/productos/:id' element={<ItemDetail/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
