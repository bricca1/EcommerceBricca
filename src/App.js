import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import './App.css';
function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
