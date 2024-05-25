
import './App.css';
import { ReactDOM } from 'react';
import Register from './Project/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
 import { mycontx } from './Project/Context';
import Home from './Project/Products/Home';
import {Itmproducts} from './Project/Data';
import Handbags from './Project/Products/Handbags'
import Backpacks from './Project/Products/Backpacks';
import Slingbags from './Project/Products/Slingbags';
import Login from './Project/Login';
import Viewprdct from './Project/Viewprdct';
import Likepage from './Project/Products/Likepage';
import Cart from './Project/Cart';
import Admin from './Project/Products/Admin';
import Adminreg from './Project/Products/Adminreg';
import About from './Project/Products/About';





function App() {
  const [user, setUser] = useState([]);
  const[iduser,setIduser]=useState([]);
  const[loguser,setLoguser]=useState(false);
  const[product,setProduct]=useState(Itmproducts);
  const[like,setLike]=useState([]);
  const[mycart,setMycart]=useState([]);
  const[cartCount,setCartCount]=useState([]);
  const[newprice,setNewprice]=useState([]);
  const[mycartCount,setMycartCount]=useState([]);
  const[Buynow,setBuyNow]=useState([]);
  const[auth,setAuth]=useState([]);
  const[confirm,setconfirm]=useState([]);


  const values = {user, setUser,loguser,setLoguser,product,setProduct,iduser,setIduser,like,setLike,mycart,setMycart,cartCount,setCartCount,newprice,setNewprice,mycartCount,setMycartCount,Buynow,setBuyNow,auth,setAuth,
    confirm,setconfirm}
  return (
    <div className="App">
      <BrowserRouter>
        
        <mycontx.Provider value={values}>

        <Routes>

           < Route path='/register' element={<Register/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/' element={<Home />} />
          <Route path='/handbags'  element={<Handbags/>} />
          <Route path='/backpacks' element={<Backpacks />} />
          <Route path='/slingbags' element={<Slingbags />} />
          <Route path='/viewproducts/:id' element={<Viewprdct/>}/>
          <Route path='/Like' element={<Likepage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin' element={<Adminreg/>}/>
          <Route path='/adm' element={<Admin/>}/>
          <Route path='/about' element={<About/>}/>
          
        </Routes>
        </mycontx.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
