// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Saludo from './components/Saludo';

function App() {
  return (

  <>
    <NavBar background={"transparent"}/>
    <ItemListContainer greeting ="Lista de motos"/>
    <Saludo title= "Royal Enfield"/>
  </>
  ); 
}

export default App;
