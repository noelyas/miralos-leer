import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './context/CartContext'
import Header from './components/Header/Header'
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import ContactUs from './components/ContactUs/ContactUs'

function App() {

  return (
    <>
        <CartContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} /> 
              <Route exact path="/category/:idCategory" element={<ItemListContainer />} /> 
              <Route exact path="/detail/:idItem" element={<ItemDetailContainer />} /> 
              <Route exact path="/cart" element={<Cart />} /> 
              <Route exact path="/contactus" element={<ContactUs />} /> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </>
  )
}

export default App;
