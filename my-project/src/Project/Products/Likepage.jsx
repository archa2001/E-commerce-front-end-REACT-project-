import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { mycontx } from '../Context';
import '../css/Likedpage.css';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Likepage() {
    const{like,setLike,mycart,setMycart,loguser}=useContext(mycontx)
    console.log("like pge",like);
    const nav= useNavigate()
    function bttn(prr){
       setLike(like.filter((del) => del!==prr))
       alert('do you want to unlike this product?');

    }
    function crtbt(prod) {
      if (loguser){
        if (mycart.includes(prod)) {
          setMycart(mycart.filter((item) => item !== prod));
        } else {
          setMycart([...mycart, prod]);
        }
      }
    
    else{
      alert('you want to login! do you want to continue?')
      nav('/login')
    }
  }
    
  function handleGoBack(){
    nav("/")
  }
  return (
    <div>
       <h2>My Likes</h2>
   
      
    <div className='Lcontainer'>
   
      
       {like.map((data) => (
                    <div  key={data.id}>
                          <Link to={`/viewproducts/${data.id}`}>      
            <img src={data.image} alt="img"/> </Link> 
            <div>
                        <h3>{data.pname}</h3>
              <p className='nold'>{data.old_price}</p>
              <p>MRP: {data.new_price}</p>
             </div>
                        <button onClick={()=> bttn(data)}>Unlike</button>
                        <button onClick={() => crtbt(data)} className="but">
              {mycart.includes(data) ? "Remove from cart" :"Add to cart"}
            </button>
                       
                    </div>
      
         ))}
    </div>
    <button onClick={handleGoBack} className='cart-gobackbuttons'>Back to Shopping</button>
<div className='likepage-footer'>
  <Footer/>
</div>
    </div>
    
  )
}
export default Likepage;