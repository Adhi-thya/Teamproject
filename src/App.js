import './App.css';
import { BrowserRouter as Router,Route, Routes, } from "react-router-dom";
import Home from './Teams/Main/Home';
import Header from './Teams/Home/Header';
// import Products from './component/Product/Products';
// import Products from './Productcomp/Component/Products'
// import Productview from './Productcomp/Component/Productview';
// import Product from './Productcomp/Component/Product';
// import Cart from './Productcomp/Store/Cart';

function App() {
  return (
    <div className="App">
     
     <Router>
      <Routes>
        
        {/* <Route path='/Products' element={<Products />}/>
        <Route path='/Productview/:id' element={<Productview />}/>
        <Route path='/Product' element={<Product />}/>
        <Route path='/Cart' element={<Cart />}/> */}
         {/* <Route path='/teams' element={<Home/>} /> */}
         <Route path='/' element={<Home/>} />
      </Routes>
     </Router>
    </div>
    
   
  );
}

export default App;
