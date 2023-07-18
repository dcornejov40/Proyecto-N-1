import './App.css';
import Navbar from './components/Navbar/Navbar';
import itemlistcontainer from './components/CartWidget'

function App() {
    return (
      <div className="App">
        <Navbar />
        <itemlistcontainer greeting={'Bienvenidos'}/>
      </div>
    );
  }
  
  export default App;
  