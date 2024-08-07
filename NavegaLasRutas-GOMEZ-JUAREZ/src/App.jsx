import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import  {CartWidget} from './components/CartWidget'
import  {ItemConteiner} from './components/ItemConteiner'
import { NavBar } from './components/NavBar'
import { NotFound } from './components/NotFound'
import { ItemDetail } from './components/ItemDetail'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemConteiner/>} />
          <Route path="/carrito" element={<CartWidget/>} />
          <Route path='/categorias/:categoria' element={<ItemConteiner/>}/>
          <Route path='/productos/:id' element={<ItemDetail/>}></Route>
          <Route path='/404' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
