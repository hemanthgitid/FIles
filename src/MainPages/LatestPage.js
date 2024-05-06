import React from 'react'
import '../MainPages/LatestPage.css'
import { BsHeart } from "react-icons/bs";
import { product as productdet} from '../MainPages/CARTDETAILSRENDER';
import {Link} from 'react-router-dom';
const LatestPage = () => {
  return (
    <div className='LatestProduct_outer' id='LatestProduct_outerscroll'>
        <div className='LatestProduct_outer_title reveal'>
                <h1>Trending This Week</h1>
                <p>Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights.</p>
        </div>
        <div className='LatestProduct_outer_cart reveal'>
              {
                Array.isArray(productdet) ? (
                  (() => {
                    const num1=Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                    const num2=Math.floor(Math.random() * (20 - 11 + 1)) + 11;
                    const start=(num1+num2)/2;
                    const slicedArray = productdet.slice(start, start+4);
                    return slicedArray.map((item) => (
                      <div key={item.id}>
                        <p><BsHeart /></p> 
                        <figure>
                          <Link to={`/ProductList/${item.id}`}>
                            <img src={item.img} width={300} height={340} alt={item.product_name} />
                          </Link>
                          <figcaption>{item.product_name}</figcaption>
                          <strong>${item.product_price}</strong>
                        </figure>
                        <span className='LatestProduct_outer_cart_hover'>+ ADD TO CART</span>
                      </div>
                    ));
                  })()
                ) : (
                  <h1>PRODUCT NOT AVAILABLE</h1>
                )
              }
        </div>
        <div className='LatestProduct_outer_footer reveal'><p><Link to="/cart" style={{textDecoration:'none',color:'black'}}>+See All Products</Link></p></div>
        <hr style={{marginTop:'100px',opacity:'0.6px'}}/>
    </div>
  )
}

export default LatestPage