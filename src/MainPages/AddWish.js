import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../MainPages/AddWish.css';
import { product as cartDetails } from '../MainPages/CARTDETAILSRENDER'; // Import cart details

const AddWish = () => {
  const [wishlist, setWishlist] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const fetchWishlistByUsername = async () => {
      try {
        const response = await axios.get(`/wishlistByUsername/${username}`);
        if (Array.isArray(response.data)) {
          setWishlist(response.data);
        } else {
          console.log("Received data is not an array:", response.data);
        }
      } catch (error) {
        console.log("Error fetching wishlist items", error);
      }
    };

    if (username) {
      fetchWishlistByUsername();
    }
  }, [username]); 
  
  const handleRemove = async (id) => {
    try {
      await axios.get(`/cart/wishlist/${id}/${username}`);
      setWishlist(prevState => prevState.filter(item => item.Productid !== id));
    } catch (error) {
      console.log("Error removing item from wishlist", error);
    }
  };

  

  return (
    <div className='Outerwish'>
      {wishlist.map(wishlistItem => {
        const productDetails = cartDetails.find(product => product.id === wishlistItem.Productid);
        if (!productDetails) return null;
        return (
          <div key={wishlistItem.Productid} className='innerwish'>
            <div className='innerwishp1'>
              <img src={productDetails.img} width={150} height={150} alt="Product" />
            </div>
            <div className='innerwishp2'>
              <h1>{productDetails.product_name}</h1>
              <h3>Price Tag: ${productDetails.product_price}</h3>
              <p style={{ textDecoration: 'line-through' }}>{productDetails.product_price}</p>
            </div>
            <div className='innerwishp3'>
              <p>ADD TO CART</p>
              <p onClick={() => handleRemove(productDetails.id)}>REMOVE ITEM</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddWish;






