import React, { useContext } from 'react'
import { mycontx } from '../Context'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "../css/Admin.css"
import "../Navbar/Navbar"
import Navbar from '../Navbar/Navbar'
import Footer from '../Products/Footer'



const AdminPage = () => {
  const { product, setProduct } = useContext(mycontx);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editOldPrice, setEditOldPrice] = useState('');
  const [editNewPrice, setEditNewPrice] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editingModalOpen, setEditingModalOpen] = useState(false);

  const [addingProduct, setAddingProduct] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductMRP, setNewProductMRP] = useState('');
  const [newProductOfferPrice, setNewProductOfferPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [showadminmessage, setShowadminmessage] = useState(false);
  const [productremove, setProductremove] = useState(null);

  const handleSaveEdit = () => {
    setProduct((prevProducts) =>
      prevProducts.map((item) =>
        item.id === editingProduct.id
          ? {
            ...item,
            pname: editName,
            image: editImage,
            old_price: editOldPrice,
            new_price: editNewPrice,
            category: editCategory,
          }
          : item
      )
    );
    setEditingProduct(null);
    setEditName('');
    setEditImage('');
    setEditOldPrice('');
    setEditNewPrice('');
    setEditCategory('');
    setEditingModalOpen(false);
  };


  const handleRemove = (itemId) => {
    setProduct((prevProducts) => prevProducts.filter((item) => item.id !== itemId));
    setProductremove(itemId);
    alert('do you want to remove this product?');
  };

  // function confirmAdmin() {
  //   if (productremove !== null) {
  //       setProduct((prevProducts) => prevProducts.filter((item) => item.id !== productremove));
  //       setShowadminmessage(false);
  //       setProductremove(null); // Reset the productRemove state after successful removal
  //   }
  // }

  //  function canceladmin(){
  //   setShowadminmessage(false);
  //  }

  const handleEdit = (itemId) => {
    const selectedItem = product.find((item) => item.id === itemId);
    setEditingProduct(selectedItem);
    setEditName(selectedItem.pname);
    setEditImage(selectedItem.image);
    setEditCategory(selectedItem.category);
    setEditOldPrice(selectedItem.old_price);
    setEditNewPrice(selectedItem.new_price);
    setEditingModalOpen(true);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditName('');
    setEditImage('');
    setEditOldPrice('');
    setEditNewPrice('');
    setEditCategory('');
    setEditingModalOpen(false);
  };

  const handleAddProduct = () => {

    if (
      !newProductName ||
      !newProductImage ||
      !newProductMRP ||
      !newProductOfferPrice ||
      !newProductCategory
    ) {

      alert('Please fill in all the fields.');
      return;
    }

    const newProduct = {
      id: new Date().getTime(),
      pname: newProductName,
      image: newProductImage,
      old_price: newProductMRP,
      new_price: newProductOfferPrice,
      category: newProductCategory,
    };

    setProduct([...product, newProduct]);

    setNewProductName('');
    setNewProductImage('');
    setNewProductMRP('');
    setNewProductOfferPrice('');
    setNewProductCategory('');
    setAddingProduct(false);
  };

  const handleOpenAddModal = () => {
    setAddingProduct(true);
  };

  const handleCloseAddModal = () => {
    setNewProductName('');
    setNewProductImage('');
    setNewProductMRP('');
    setNewProductOfferPrice('');
    setNewProductCategory('');
    setAddingProduct(false);
  };

  return (
    <div>
      <Navbar />
      <div className='admin-bar'>

      </div>
      <div className='admin-container'>
        <h2 className='admin-header'>Admin Page</h2>
        <button className='admin-add-btn' onClick={handleOpenAddModal}>
          Add Product
        </button>

        {addingProduct && (
          <div className='add-modal'>
            <h2>Add New Product</h2>
            <label>Bag Name</label>
            <input type='text' value={newProductName} onChange={(e) => setNewProductName(e.target.value)} />
            <label>Image URL</label>
            <input type='text' value={newProductImage} onChange={(e) => setNewProductImage(e.target.value)} />
            <label>Category</label>
            <input type='text' value={newProductCategory} onChange={(e) => setNewProductCategory(e.target.value)} />
            <label>MRP</label>
            <input type='text' value={newProductMRP} onChange={(e) => setNewProductMRP(e.target.value)} />
            <label>Offer Price</label>
            <input type='text' value={newProductOfferPrice} onChange={(e) => setNewProductOfferPrice(e.target.value)} />
            <button onClick={handleAddProduct} className='adminadd'>Add</button>
            <button onClick={handleCloseAddModal}>Cancel</button>
          </div>
        )}

        <div className='admin-data'>
          {product.map((item) => (
            <div key={item.id} className='admin-card'>
              <Link to={`/viewproducts/${item.id}`}>
                <img className='admin-image' src={item.image} alt={item.name} />
              </Link>
              <div className='admin-name'>{item.pname}</div>
              <div className='admin-old-price'>MRP:₹{item.old_price}</div>
              <div className='admin-new-price'>Site Price: ₹{item.new_price}</div>
              <div className='admin-category'>Category: {item.category}</div>
              <div className='admin-buttons'>
                <button className='admin-remove-btn' onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
                <button className='admin-edit-btn' onClick={() => handleEdit(item.id)}>
                  Edit
                </button>
              </div>

              {editingProduct && editingProduct.id === item.id && (
                <div className='edit-modal'>
                  <h2>Edit Product</h2>
                  <div className='admin-label'>
                    <label>Product Name</label>
                    <input type='text' value={editName} onChange={(e) => setEditName(e.target.value)} />
                    <label>Image URL</label>
                    <input type='text' value={editImage} onChange={(e) => setEditImage(e.target.value)} />
                    <label>MRP</label>
                    <input type='text' value={editOldPrice} onChange={(e) => setEditOldPrice(e.target.value)} />
                    <label>Site Price</label>
                    <input type='text' value={editNewPrice} onChange={(e) => setEditNewPrice(e.target.value)} />
                    <label>Category</label>
                    <input type='text' value={editCategory} onChange={(e) => setEditCategory(e.target.value)} />
                  </div>
                  <button onClick={handleSaveEdit} className='adminsave'>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                  {/* {showadminmessage && (
                <div className="message-box">
                    <div className="message-box-content">
                        <p>Do you want to remove this product?</p>
                        <button className='msg-box-yes' onClick={confirmAdmin}>Yes</button>
                        <button className='msg-box-no' onClick={canceladmin}>No</button>
                    </div>
                </div>
            // )} */}

                </div>


              )}
            </div>
          ))}
        </div>



      </div>   <div>
        <Footer />
      </div>

    </div>
  );
};

export default AdminPage;