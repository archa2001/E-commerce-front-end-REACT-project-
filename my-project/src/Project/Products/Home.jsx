// import React from 'react';
import Item from '../Item/Item';
import itmdta from '../Item/Itemdata';
import Navbar from '../Navbar/Navbar';
import '../css/Home.css';
import Footer from './Footer';
import Searchbar from './Searchbar';
import { Itmproducts } from '../Data';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    <div className='container'>
      <Navbar />
     
      <div className='bgcolor'>
      <Searchbar/>
        <div>
          <img
            src='https://miraggiolife.com/cdn/shop/files/Holdiady_Sale_Banner_copy.jpg?v=1703244346&width=1920'
            style={{ width: '1519px', height: '500px' }}
            alt=' '
          ></img>
        </div>
        <div className='itdta'></div>
        <h3 className='offer'>Offer Zone</h3>
        <hr />

        <div className='Home-container'>
          {itmdta.map((item) => (
            <div className='Home-card' key={item.id}>
              <Link to='/handbags'>
              <img src={item.image} alt='img' className='card-image'></img>
              </Link>
              <div className='card-details'>
                <h3>{item.Name}</h3>
                <h3>{item.off}</h3>
                <h3 className='new'>offer price: {item.offer_price}</h3>
                <h3 className='old'>MRP:{item.price}</h3>
              </div>
            </div>
          ))}
          
          
        </div>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
    </div>
  );
}
