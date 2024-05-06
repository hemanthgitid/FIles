import React, { useState } from 'react'
import '../MainPages/Product.css'
import { IoPricetagOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { PiShoppingCartThin } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { LiaGooglePlusG } from "react-icons/lia";
import { BiLogoPinterest } from "react-icons/bi";
import { BiLogoTumblr } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { useParams } from 'react-router-dom';
import {product} from './CARTDETAILSRENDER'
import {Link} from 'react-router-dom';
const Product = () => {
    const para=useParams();
    const obj=product.find((item)=>{return item.id == para.id});
    const [cartcount,setcartcount]=useState(1);
    const [proi,setproi]=useState(obj.img);
    function minuscart(){
        if(cartcount==1)
            setcartcount(1);
        else
        setcartcount(cartcount-1);
    }
  return (
    <div>
              <div className='product_show_outer'>
              <div id='product_show_outer_img'>
                        <img src={proi} width={'760px'} height={'750px'}/>
                        <div>
                             {obj.img1.map((element, index) => (
                               <img key={index} src={element} width={'140px'} height={'140px'} alt={`Image ${index}`} style={{cursor:'pointer'}} onClick={()=>{setproi(element)}}/>
                             ))}
                        </div>

                    </div>
                    <div id='product_show_outer_text'>
                        <div>
                        <h1>{obj.product_name}</h1>
                            <h2><IoPricetagOutline /><span>${obj.product_price}</span></h2>
                        </div>
                        <div >
                            <p>{obj.product_desc1}</p>
                        <br/><br/><p>{obj.product_desc2}</p>
                        </div>
                        <div id='product_show_outer_button'>
                            <div id='product_show_outer_button_one'>
                                    <div>{cartcount}</div>
                                    <div id='product_show_outer_button_one_part2'>
                                        <div onClick={()=>{setcartcount(cartcount +1)}} ><RiArrowUpSLine /></div>
                                        <div  onClick={minuscart}><RiArrowDownSLine /></div>
                                    </div>
                                
                            </div>
                            <div className='cartt_product'><PiShoppingCartThin /> <span>Add To Cart</span></div>
                        </div>
                        <div className='product_show_outer_wish'>
                            <h3>Add to wishlist</h3>
                            <br/><br/>  <br/>
                            <small>Share on:
                                <span><Link to="https://www.facebook.com/"><BiLogoFacebook  style={{color:"black"}} /></Link></span>
                                <span><Link to="https://twitter.com/?lang=en"><BiLogoTwitter  style={{color:"black"}} /></Link></span>
                                <span><Link to="https://www.linkedin.com/login"><TiSocialLinkedin  style={{color:"black"}} /></Link></span>
                                <span><Link to="https://www.tumblr.com/"><BiLogoTumblr  style={{color:"black"}} /></Link></span>
                                <span><Link to="https://support.google.com/"><LiaGooglePlusG  style={{color:"black"}} /></Link></span>
                                <span><Link to="https://in.pinterest.com/"><BiLogoPinterest  style={{color:"black"}} /></Link></span>
                                <span><Link to="https://www.mailerlite.com/"><SiMinutemailer  style={{color:"black"}} /></Link></span>
                                </small>
                        </div>
                    </div>
        </div>
        <div className='product_des'>
            <div className='product_des_p1'>
                <div>
                    <h1>Description</h1>
                </div>
                <div>
                <p>{obj.product_desc3}</p>
                </div>
                <div>
                <p>{obj.product_desc4}</p>
                </div>
            </div>
            <div className='product_des_p2'>
                <h1 style={{marginTop:'1em', marginBottom:'1em' , fontFamily:'Times New Roman, Times, serif'}}>Additional Information</h1>
                    <table>
                    <tbody>
                        <tr>
                            <td>Handle height (ground to handle)</td>
                            <td>37-45″</td>
                        </tr>
                        <tr>
                            <td>Width</td>
                            <td>24″</td>
                        </tr>
                        <tr>
                            <td>Wheels</td>
                            <td>12″ air / wide track slick tread</td>
                        </tr>
                        <tr>
                            <td>Seat back height</td>
                            <td>21.5″</td>
                        </tr>
                        <tr>
                            <td>Head room (inside canopy)</td>
                            <td>25″</td>
                        </tr>
                        <tr>
                            <td>Weight Capacity</td>
                            <td>60 LBS</td>
                        </tr>
                        <tr>
                            <td>Weight (w/o wheels)</td>
                            <td>20 LBS</td>
                        </tr>
                        <tr>
                            <td>Folded (w/o wheels)</td>
                            <td>32.5″L x 18.5″W x 16.5″H</td>
                        </tr>
                        <tr>
                            <td>Door Pass Through</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Frame</td>
                            <td>Aluminum</td>
                        </tr>
                        <tr>
                            <td>Stand Up</td>
                            <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}

export default Product