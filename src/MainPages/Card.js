import React from 'react'
import '../MainPages/Card.css';
import {Link} from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Card = ({id,img,product_name,product_price,old_price}) => {
  const [wishheart,setwishheart]=useState(true);
  const navigate=useNavigate();
  const data = localStorage.getItem('username');
            const handlewish = async()=>{
              if(data == null){
                navigate('/Signup');
              }
              else{
                setwishheart(false);
                try {
                  const userId = localStorage.getItem('username'); 
                  const num=id.toString();
                  console.log(num);
                  const response = await axios.post('/cart/wishlist',{
                    username:userId,
                    Productid:num
                  })  //to=""
                  
                }
                catch (error) {
                  console.error('Error adding products to wishlist:', error);
                }
              }
          }

          const handlecart = async(id) =>{
            const username = localStorage.getItem('username');
            try{
              const responce = await axios.post('/cart/add',{
                username:username,
                cartitem:id
              })
              .then(function (response) {
                console.log(response.data.message); // Log the response message
                navigate('/cartList');
            })
            .catch(function (error) {
                console.error('Error while adding to cart:', error);
            })
            }
            catch(err){
              console.log(` the error while adding cart ${err}`);
            }
          }
         return (
                                    <div key={id}>
                                                {
                                                    wishheart && 
                                                  <p onClick={handlewish}><BsHeart /></p> 
                                                }
                                      <figure>
                                      <Link to={`/ProductList/${id}`} reloadDocument> <img src={img} width={250} height={260}/></Link>
                                          <figcaption>{product_name}</figcaption>
                                        <span id='p2'>PRICE TAG:</span> <span id='p4'> ${product_price}</span><span id='p3'>${old_price}</span>                     
                                          </figure>
                                        <Link ><span className='shop_cart_hover' onClick={()=>{handlecart(id)}}>+ ADD TO CART</span></Link> 
                                      </div>
              )
}

export default Card