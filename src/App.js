// import logo from './logo.svg';
import './App.css';
import Mystore from './MyStore/Home';
import Cart from './MyStore/Add_Cart';
import{Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/Cart">Cart</Link>
    <Routes>
      <Route path="/" element={<Mystore/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
