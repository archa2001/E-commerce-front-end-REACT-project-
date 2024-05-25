import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { mycontx } from '../Context';
import '../css/Handbags.css'
import {Link} from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


function Handbags() {
  const{product,setPtoduct,like,setLike,loguser}=useContext(mycontx);
  const hndbag=product.filter((item)=>item.category === "Handbags")
  console.log("bckpck",hndbag);
  const nav=useNavigate()
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
    
    <div className='hbag-container'>
      <Navbar/>
      <img src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img21/shoes/2023/Jupiter23/StealDeals/topbanner/Handbags_3000x770._SX3000_QL85_.jpg' style={{width:'1500px',height:'500px'}}></img>
      <div className='handbag-container'>
      {hndbag.map((data) =>(
        <div className='handbag-card'>
          <Link to={`/viewproducts/${data.id}`}>


        <img className='himg' src={data.image} alt='img'></img></Link>
        <div className='hcard-details'>
        <h3>{data.pname}</h3>
        <h3 className='h_old'>{data.old_price}</h3>
        <h3 className='h_new'>MRP:{data.new_price}</h3>
        </div>
        <button onClick={() => btn(data)} className="lke"
                            >{like.includes(data) ? <FcDislike /> : <FcLike />}
                            </button>
        </div>
      )
      )}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Handbags
