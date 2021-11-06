import './App.css';
import ListIkan from './List-Ikan/List-Ikan';
import CatalogList from './Catalog-list/Catalog-list';
import DeskripsiIkan from './List-Ikan/Deskripsi-Ikan';


function App() {
  return (
    <div>
    <CatalogList/>
    <ListIkan />
    <DeskripsiIkan/>
    </div>
  );
}

export default App;
