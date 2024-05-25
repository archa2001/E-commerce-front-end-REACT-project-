import { useContext, useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import '../css/Search.css'
import { mycontx } from "../Context";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

export default function Searchbar() {
  const { product,like,setLike } = useContext(mycontx);
  const [searchInput, setSearchInput] = useState("");
  const [filteredproduct, setFilteredProduct] = useState([]);

  const handleSearch = () => {
    const filtered = product.filter((product) =>
      product.pname.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProduct(filtered);
  };
  function btn(pro) {
    // if (!like.includes(pro)) {


    //     setLike([...like, pro])

    // }
  if (like.includes(pro)) {
    setLike(like.filter((del) => del !== pro))
}
else {
    setLike([...like, pro])
}
  }

  return (
    <div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Here"
          className='search-input'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button className='search-btn' onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {searchInput && (
        <div className='search-product-details'>
          {filteredproduct.map((data, index) => (
            <div key={index} className='search-result-item'>
              <Link to={`/viewproducts/${data.id}`}>
                <img src={data.image} alt='img' className='search-img' />
                <h1 className='search-h1'>{data.pname}</h1>
                <h3 className='search-h3'>Category: {data.category}</h3>
              </Link>
              <button onClick={() => btn(data)} className="lke"
                            >{like.includes(data) ? <FcDislike /> : <FcLike />}
                            </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
