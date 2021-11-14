import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Routing from './components/Routing';
import Transaksi from './components/pages/Transaksi'
import Header from './components/Navbar'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
     <Transaksi/>
      </BrowserRouter>
    </div>
  );
}

export default App;
