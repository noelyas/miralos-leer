import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} /> 
          <Route exact path="/category/:idCategory" element={<ItemListContainer />} /> 
          <Route exact path="/detail/:idItem" element={<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
