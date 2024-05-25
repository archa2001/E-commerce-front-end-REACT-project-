import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { mycontx } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Backpack.css'
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import Footer from '../Products/Footer';
import { useNavigate } from 'react-router-dom'


function Backpacks() {
  const { product, setProduct,like,setLike,loguser} = useContext(mycontx)
  console.log("prdct", product);
  const backpack = product.filter((item) => item.category === "Backpack")
  console.log("bckpck", backpack);
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
    <div className='bbagcontainer'>
      <Navbar />
      <img src='https://buysellgraphic.com/images/graphic_preview/thumb/ecommerce_website_banner_template_customers_sketch_flat_design_55246.jpg' alt='img'  style={{ width: '1540px', height: '550px' }}></img>
      <div className='Backpack-container'>
      {backpack.map((data) => (
        <div className='backpack-card'>
          
          <Link to={`/viewproducts/${data.id}`}>
            <img src={data.image} alt='img' className='bcard-image'></img></Link>
            
            <div className='bcard-details'>
            <h3>{data.pname}</h3>
            <h3 className='b_old'>{data.old_price}</h3>
            <h3 className='b_new'>MRP:{data.new_price}</h3>
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

export default Backpacks
