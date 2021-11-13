import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Header from './components/Navbar';
import Home from "./components/pages/Home"



function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/> */}
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
