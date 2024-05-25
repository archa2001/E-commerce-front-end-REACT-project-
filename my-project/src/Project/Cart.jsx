import React from 'react'
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { mycontx } from './Context';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';

import './css/Cart.css'
function Cart() {
  const { mycart,setMycart, cartCount,setCartCount,Buynow,setBuyNow ,confirm,setconfirm} = useContext(mycontx);
  const [totalAmount, setTotalAmount] = useState(0);
  const[showcartmessage,setShowcartmessage]=useState(false);
  const[productToremove,setproductToremove]=useState(null);
const nav=useNavigate()

  useEffect(() => {
    const calculatedTotalAmount = mycart.reduce((total, item) => {
      return total + item.new_price * (item.count || 1);
    }, 0);

    setTotalAmount(calculatedTotalAmount);
  }, [mycart]);
  if (mycart.length === 0) {
    return (
      <div className='empty-cart'>
        <img src="https://cdn-icons-png.flaticon.com/512/2037/2037457.png" alt='Empty Cart' className='emptycart-img' />
        <h1 className='emptycart-font'>Your cart is empty!!</h1>
        <div className='emptycart-backhome'>
        <button onClick={handleGoBack} className='cart-gobackbuttons'>Back to Shopping</button>
        </div>
      </div>
    );
  }

  const handleIncrement = (itemId) => {
    setMycart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              count: Math.max((item.count || 1) + 1, 1),
            }
          : item
      )
    );
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (itemId) => {
    setMycart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              count: Math.max((item.count || 1) - 1, 1),
            }
          : item
      )
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  const handleRemove = (itemId) => {
    // setMycart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    // setCartCount((prevCount) => prevCount - 1);
    // alert('do you want to remove this product from cart?');
    setproductToremove(itemId);
    setShowcartmessage(true);
  };
function confirmcart(itemId){
  setMycart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  setCartCount((prevCount) => prevCount - 1);
  setShowcartmessage(false);
}
function cancelcart(){
  setShowcartmessage(false);
}
  
    const handleBuyNow = () => {
      const buyNowItems = [...mycart];
    
      setMycart(prevCart => {
        if (prevCart === mycart) {
          return buyNowItems;
        } else {
          return prevCart;
        }
      });
    
      
      setBuyNow(buyNowItems);
    };
 

  const handleOrder = () => {
    const isConfirmed = window.confirm('Are you sure you want to place the order?');

    if (isConfirmed) {
      alert('Order placed successfully!');
      
    }
   
  };
  function handleGoBack(){
    nav("/")
  }

  return (
    <div>
          <h2>My Cart</h2>
    <div className='cart'>
  
      {mycart.map((item) => (
        <div className="cartdata" key={item.id}>
          <Link to={`/viewproducts/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
          <div className='cart-name'>{item.pname}</div><br/>
          <div className='cart-price'>₹{item.new_price * (item.count || 1)}</div>
          <div>
            <button className='cart-button' onClick={() => handleDecrement(item.id)}>
              -
            </button>
            <span>{item.count || 1}</span>
            <button className='cart-button' onClick={() => handleIncrement(item.id)}>
              +
            </button>
          </div>
          <button className='cart-remove' onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
      {mycart.length > 0 && (
        <div className='cart-buttons'>
          {/* <button className='buy-now-button' onClick={handleBuyNow}>
            Buy Now
          </button> */}
        </div>
      )}
      <div className='total-amount'>
        <p>Total Amount: ₹{totalAmount}</p>
        <button className='order-button' onClick={handleOrder}>
          BuyNow
        </button>
      </div>
      
    </div>
    <button onClick={handleGoBack} className='cart-gobackbuttons'>Back to Shopping</button>
    {showcartmessage && (
                <div className="message-box">
                    <div className="message-box-content">
                        <p>Do you want to remove this product?</p>
                        <button className='msg-box-yes' onClick={() => confirmcart(productToremove)}>Yes</button>

                        <button className='msg-box-no' onClick={cancelcart}>No</button>
                    </div>
                </div>
            )}
    </div>
  );
};

export default Cart;
