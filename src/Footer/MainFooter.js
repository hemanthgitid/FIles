import React from 'react'
import '../Footer/MainFooter.css'
import Footerlogo from '../Webimages/Logo.svg'
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { PiInstagramLogoThin } from "react-icons/pi";
import { AiFillLinkedin } from "react-icons/ai";
import {Link} from 'react-router-dom';
const MainFooter = () => {
  return (
    <div style={{backgroundColor:'rgb(248, 248, 246)', minWidth:'1560px'}}>
        <div className='Mainfooter'>
            <div id='Mainfooter_one'>
            <img src={Footerlogo} alt="logo" width={200} height={100}/>
            <p>2593 Timbercrest Road, Chisana, Alaska Badalas<br/>
              United State</p>
            <p>(+91)7-723-4608</p>
            <p>Aurosfurniture@domain.vn</p>
            </div>
            <div id='Mainfooter_two'>
            <h1>Our Products</h1>
            <p>Checkout</p>
            </div>
            <div id='Mainfooter_three'>
              <h1>Useful Links</h1>
              <p style={{marginTop:'80px'}}>About Us</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
            <div id='Mainfooter_four'>
                <h1>NewsLetter</h1>
                <p>Stay Updated on all that’s new add noteworthy</p>
                <input type='email' name='email' id='email' placeholder='Enter your e-mail...' autoComplete='off'/>
                <div id='Main_footer_icons'>
                  <div><Link to="https://www.facebook.com/"><RiFacebookLine  style={{color:"black"}}/></Link></div>
                  <div><Link to="https://twitter.com/?lang=en"><IoLogoTwitter  style={{color:"black"}} /></Link></div>
                  <div><Link to="https://www.instagram.com/"><PiInstagramLogoThin  style={{color:"black"}} /></Link></div>
                  <div> <Link to="https://www.linkedin.com/login"><AiFillLinkedin  style={{color:"black"}} /></Link></div>
                </div>
            </div>
            <p></p>
        </div>
            <hr style={{margin:'50px',opacity:'0.7'} }/>
        <p style={{fontSize:'22px',opacity:'0.7',textAlign:'center',marginBottom:'2em'}}>Copyright © 2022 Auros. All rights reserved.</p>
    </div>
  )
} 

export default MainFooter