import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import { getFetch } from './helpers/getFetch';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    getFetch
    .then( data => {

      console.log('Mock API')
      setProducts(data);

    })
    .catch( err => console.log(err) )

    return () => {
      console.log('clean')
    }

  }, [])

  return (
    <>
      <Header />
      <ItemListContainer products={ products } />
    </>
  )
}

export default App;
