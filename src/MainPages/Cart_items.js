import React, { useState } from 'react'
import '../MainPages/Cart_items.css'
import SideBar from '../MainPages/SideBar'
import Card from './Card'
import {product} from '../MainPages/CARTDETAILSRENDER'
import Products from './Products'


const Cart_items = () => {
  const [selectcat,setselectcat]=useState(null);
  const handlechange = (event) => { 
    setselectcat(event.target.value);
  }
  function filtereddata(products,selected){
    let filteredproducts=products;
      if(selected){
        filteredproducts= filteredproducts.filter(
          ({cat,color,product_price,product_name})=> 
          cat=== selected ||
          color===selected||
          product_price===selected||
          product_name===selected
          );
      } 
  
      return filteredproducts.map(
        ({id,img,product_name,product_price,old_price})=>(
          <Card 
           id={id}
           img={img}
           product_name={product_name}
           product_price={product_price}
           old_price={old_price}
           />
        
        ));
  }
     const result23= filtereddata(product,selectcat);
     
  return (
    <div>
        <div className='items_flex'>
             <h1>Products</h1>
        </div>
      <div className='filterflex'>
             <SideBar handlechange={handlechange}/>    
             <Products result23={result23}/>
      </div>

    </div>
  )
}

export default Cart_items