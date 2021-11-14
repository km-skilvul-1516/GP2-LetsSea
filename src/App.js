import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import IkanLaut from './components/IkanLaut';
import IkanTawar from './components/IkanTawar';
import Kategori from './components/Kategori';
import Header from './components/Navbar';
import About from './components/pages/About';
import Home from "./components/pages/Home"
import Transaksi from "./components/pages/Transaksi"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path ="/" element = {<Home/>}/>
          <Route exact path ="/edukasi" element ={<Kategori/>} />
          <Route exact path = "/transaksi" element = {<Transaksi/>}></Route>
          <Route exact path ="/about" element ={<About/>}/>
          <Route exact path = "/cart" element ={<Cart/>}/>
          <Route exact path = "/IkanLaut" element ={<IkanLaut/>}/>
          <Route exact path = "/IkanTawar" element ={<IkanTawar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
