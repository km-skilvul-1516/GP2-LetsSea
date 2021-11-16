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
import FormLogin from './components/FormLogin';
import FormSignup from './components/FormSignup';



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
          <Route exact path = "/signup" element = {<FormSignup/>}/>
          <Route exact path = "/login" element = {<FormLogin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
