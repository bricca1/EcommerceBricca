import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import ItemCount from './components/ItemCount.js'
import  {BrowserRouter, Routes, Router} from 'react-router-dom';
import './App.css';
import Card from '@mui/material/Card';
function App() {
  return (
    <BrowserRouter>
        <div>
          <header className="App-header">
            <NavBar/>
              <ItemListContainer/>
          </header>
          
        </div>
    </BrowserRouter>

  );
}

export default App;
