import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { mycontx } from './Context';
import './css/Viewproducts.css'
import { useNavigate } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

export default function ViewProduct() {
  const { id } = useParams();
  const { product, mycart, setMycart,loguser,setLoguser ,like,setLike} = useContext(mycontx);
  const prdct = product.find((prod) => prod.id === parseInt(id));
  const nav=useNavigate()
  function handleCartButtonClick(prod) {
   
    if (loguser){
      if (mycart.some((data)=> data.id === product.id)){
        nav("/Cart")
    } else {
      setMycart([...mycart, {...product, count:1}])
    }
  }

else{
  alert('you want to login! do you want to continue?')
  nav('/login')
}
  }
  function btn(pro) {
    if(loguser){
    if (like.includes(pro)) {
      setLike(like.filter((del) => del !== pro))
    }
    else {
      setLike([...like, pro])
    }
  }

else {
  alert('you want to login! do you want to continue?')
  nav('/login')
}
  }

function handleGoBack(){
  nav("/")
}
  return (
    <div className="product-container">
      <h2>MY PRODUCTS</h2>
      <div>
        <img className="product-image" src={prdct.image} alt={prdct.name} />
        <div className="product-details">
          <h1 className="product-name">{prdct.pname}</h1>
          <p className="product-old-price">{prdct.old_price}</p>
          <p className="product-price">Price: {prdct.new_price}</p>
        </div>
      </div>
      <div>
      <button onClick={() => btn(prdct)} className="lke"
            >{like.includes(prdct) ? <FcDislike /> : <FcLike />}
            </button>
            </div>
            <div>
        <button
          onClick={() => handleCartButtonClick(prdct)}
          className="add-to-cart-button"
        >
          {mycart.some((cartItem)=>cartItem.id===prdct.id) ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
      <button onClick={handleGoBack} className='cart-gobackbuttons'>Back to Shopping</button>
    </div>
  );
}
