import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

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
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </>
  )
}

export default App;
