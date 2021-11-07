import './App.css';
import Header from './components/Header';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting='¡Hola, mundo!' />
    </>
  );
}

export default App;
