import './App.css'

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Error from "./components/pages/error/error"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"
import { CartProvider } from './components/context/CartContext';
import Carrito from "./components/carrito/Carrito"
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div>
    <CartProvider>
      <Router>
        <main style={{ width: "100vw", height: "100vh"}}>
          <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/catalogo" element={<ItemListContainer/> }/>
            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="checkout" element={<Checkout/>} />
            <Route path="/*" element={<Error/>} />
            <Route path="/*/*" element={<Error/>} />
            <Route path="/*/*/*" element={<Error/>} />
        </Routes>
          <Footer/>
        </main>
      </Router> 
    </CartProvider>
    </div>
  )
}

export default App
