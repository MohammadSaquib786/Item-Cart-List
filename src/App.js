import './App.css';
import ItemCard from './component/ItemCard/ItemCard';
import ItemData from './component/ItemData/ItemData';
import Navbar from './component/Navbar/Navbar';

function App() {
  
  return (
    <div className="App">
    <div className='allcard'>
      <Navbar/>
      <ItemCard/>
      <ItemData/>
    </div>
    </div>
  );
}
export default App;
