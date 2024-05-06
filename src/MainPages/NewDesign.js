import React from 'react'
import '../MainPages/NewDesign.css'
import main_grid from '../Webimages/main_grid.jpg'
import { BsHeart } from "react-icons/bs";
import {Link}  from 'react-router-dom'
import { product as ph } from '../MainPages/CARTDETAILSRENDER';
const NewDesign = () => {
  return (
    <div className='NewDesign_grid'>
        <div className='NewDesign_grid_header '>
                <div><p>New Design</p></div>
                <div className='NewDesign_grid_nav_bar'>
                    <ul>
                        <li>All</li>
                        <li>Furnitures</li>
                        <li>Chairs</li>
                        <li>Lighting</li>
                        <li>Decor</li>
                    </ul>
                </div>
        </div>
        <div className='NewDesign_grid_part2 reveal2'>
                <div>
                        <img src={main_grid} width={770} height={900} alt="main_grid"/>
                </div>
                <div className='NewDesign_grid_part2_in reveal2'>
                {
                Array.isArray(ph) ? (
                  (() => {
                    const num1=Math.floor(Math.random() * (15 - 1 + 7)) + 1;
                    const num2=Math.floor(Math.random() * (20 - 11 + 10)) + 11;
                    const start=(num1+num2)/2;
                    const slicedArray = ph.slice(start, start+4);
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
                        <span className='NewDesign_grid_part2_in_hover reveal2'>+ ADD TO CART</span>
                      </div>
                    ));
                  })()
                ) : (
                  <h1>PRODUCT NOT AVAILABLE</h1>
                )
              }
{/* 

               
                    <div>
                            <p><BsHeart /></p> 
                        <figure>
                            <img src={all1} width={297} height={340}/>
                        <figcaption>Discus Floor and Table</figcaption>
                        <strong>$167.12</strong>
                        </figure>
                        <span className='NewDesign_grid_part2_in_hover reveal2'>+ ADD TO CART</span>
                    </div>
                    <div>
                            <p><BsHeart /></p> 
                        <figure>
                            <img src={all2} width={297} height={340}/>
                        <figcaption>Discus Floor and Table</figcaption>
                        <strong>$167.12</strong>
                        </figure>
                        <span className='NewDesign_grid_part2_in_hover reveal2'>+ ADD TO CART</span>
                    </div>
                    <div>
                            <p><BsHeart /></p> 
                        <figure>
                            <img src={all3} width={297} height={340}/>
                        <figcaption>Discus Floor and Table</figcaption>
                        <strong>$167.12</strong>
                        </figure>
                        <span className='NewDesign_grid_part2_in_hover reveal2'>+ ADD TO CART</span>
                    </div>
                    <div>
                            <p><BsHeart /></p> 
                        <figure>
                            <img src={all4} width={297} height={340}/>
                        <figcaption>Discus Floor and Table</figcaption>
                        <strong>$167.12</strong>
                        </figure>
                        <span className='NewDesign_grid_part2_in_hover reveal'>+ ADD TO CART</span>
                    </div> */}



                </div>
        </div>
    </div>
  )
}

export default NewDesign