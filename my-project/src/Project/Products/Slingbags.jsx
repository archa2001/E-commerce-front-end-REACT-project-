import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { mycontx } from '../Context';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../css/SlingBags.css';

function Slingbags() {
  const { product, setProduct, like, setLike, mycart, setMycart,loguser } = useContext(mycontx);
  const nav = useNavigate()
  const slingbag = product.filter((item) => item.category === 'Slingbag');

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

  return (
    <div className='bagcontainer'>
      <div>
        <Navbar />
      </div>
      <img
        src="https://purse-valley-preview-com.3dcartstores.com/cdn-cgi/image/quality%3D85/assets/images/3dcart/footer-banner.jpg"
        style={{ width: '1540px', height: '550px' }}
        alt="background" />
      <div className="slingbag-container">

        {slingbag.map((data) => (
          <div key={data.id} className="slingbag-card">
            <Link to={`/viewproducts/${data.id}`}>


              <img src={data.image} alt="img" className="card-image" /> </Link>
            <div className="card-details">
              <h3>{data.pname}</h3>
              <p className='old'>{data.old_price}</p>
              <p className='new'>MRP: {data.new_price}</p>

            </div>
            <div>
            <button onClick={() => btn(data)} className="lke"
            >{like.includes(data) ? <FcDislike /> : <FcLike />}
            </button>
            </div>
           



          </div>
        ))}
      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
}
export default Slingbags;

