import React, { useState } from 'react'
import './Navbar.css';
import { PiShootingStarThin } from "react-icons/pi";
import homelogo from '../Webimages/Logo.svg'
import { PiUserThin } from "react-icons/pi";
import { PiShoppingCartThin } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { GoVerified } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useRef } from 'react';
import axios from 'axios';
import { PiUserCircleThin } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { useEffect } from 'react';
const Navbar = () => {
  const inputusername = useRef(null);
  const inputupass = useRef(null);

  const [validu, setvalidu] = useState(false);
  const [nonvalidu, setnonvalidu] = useState(false);
  const [validp, setvalidp] = useState(false);
  const [nonvalidp, setnonvalidp] = useState(false);
  const [errst,seterrst]=useState(false);
  const [formdata, setformdata] = useState({
    username: "",
    pwd: "",
  });
  const [severcheck, setservercheck] = useState(false);
  const [loginuser, setloginuser] = useState("");
  axios.defaults.baseURL = "http://localhost:3030/";
  function handleonchange(e) {
    const { value, name } = e.target;
    setformdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function logout() {
    localStorage.clear();
    setservercheck(true);
    setvalidp(false);
    setvalidu(false);
  }

  useEffect(() => {
    const checksto = localStorage.getItem('username');
    if (!checksto || checksto.length === 0) {
      setservercheck(true);
    } else {
      setservercheck(false);
      setloginuser(checksto);
    }
  }, []);

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.post("/validate", formdata);
      if (data.data.success) {
        setservercheck(false);
        localStorage.setItem('username', data.data.username);
        localStorage.setItem('pwd', data.data.pwd);
        setloginuser(localStorage.getItem("username"));
        inputusername.current.value = '';
        inputupass.current.value = '';
      } 
      else {
        inputusername.current.value = '';
        inputupass.current.value = '';
        setvalidp(false);
        setvalidu(false);
        setnonvalidp(false);
        setnonvalidu(false);
        seterrst(true); 
        await new Promise(resolve => setTimeout(() => {
          document.getElementById('homeloginform').reset();
          seterrst(false);
          resolve();
        }, 2000));
      }
    } catch (err) {
      console.log(err);
    }
  };

   function validateuser(){
    const validUsernameregex = /^[0-9A-Za-z]{6,16}$/;
    let signinname=inputusername.current.value;
    if(signinname.length===0){
      setvalidu(false);
      setnonvalidu(false);
    }
    else if(validUsernameregex.test(signinname)){
      setvalidu(true);
      setnonvalidu(false);
      console.log(signinname);
    }
    else if(signinname.toString().length>16 || signinname.toString().length<6){
      setnonvalidu(true);
      setvalidu(false);
    }
  }
  function validatepass(){
    const validpassregex =/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
    let signinpass=inputupass.current.value;
    if(signinpass.length===0){
      setvalidp(false);
      setnonvalidp(false);
    }
    else if(validpassregex.test(signinpass)){
      setvalidp(true);
      setnonvalidp(false);
      console.log(signinpass);
    }
    else if(signinpass.toString().length>16 || signinpass.toString().length<6){
      setnonvalidp(true);
      setvalidp(false);
    }
  }

  return (
    <div className='navbar'>
      <div className='navbar-menu'>

        <span>
               <img src={homelogo} alt="logo"/>
                </span>
                <div className='over'><Link to="/" style={{textDecoration:'none'}}>Home</Link></div>
                <div className='shopdrop-down over'><Link to="/cart" style={{textDecoration:'none'}}>Shop<span><RiArrowDropDownLine /></span></Link>
                    <div className='shopdrop-downoption'>
                        <ul>
                          <br/><br/>
                            <li><Link to="/CartList" style={{textDecoration:'none'}} className='o'>Cart</Link></li>
                            <li><Link to="/cart/wishlist" style={{textDecoration:'none'}} className='o'>WishList</Link></li>
                            {/* <li className='o'>My account</li> */}
                            <li><Link to="/paymentmethod" style={{textDecoration:'none'}} className='o'>Payment Method</Link></li>
                            <li><Link to="/privacypolicy" style={{textDecoration:'none'}} className='o'>Privacy Policy</Link></li>
                            <li><Link to="/shippingmethod" style={{textDecoration:'none'}}className='o'>Shipping Method</Link></li>
                            <li className='o'>Order Tracking</li>
                        </ul>
                      </div>
                </div> 
                <div className='over' ><Link to="/ProductList/1" style={{textDecoration:'none'}}>Product</Link></div>
                <div className='over'><Link to="/blog" style={{textDecoration:'none'}}>Blog</Link></div>
                <div className='shopdrop-down over' ><Link to="/warrentypage" style={{textDecoration:'none'}}>Page<span><RiArrowDropDownLine /></span></Link>
                <div className='shopdrop-downoption' style={{textDecoration:'none'}}>
                        <ul>
                            <li style={{marginTop:'20px'}}><Link to="/AboutPage" style={{textDecoration:'none'}} className='o'>About</Link></li>
                            <li><Link to="/faq" style={{textDecoration:'none'}} className='o'>FAQ</Link></li>
                            <li ><Link to="/warrentypage" style={{textDecoration:'none'}} className='o'>Warranty and Services</Link></li>
                            <li><Link to="/termsandconditions" style={{textDecoration:'none'}} className='o'>Term & Conditions</Link></li>
                        </ul>
                      </div>
                    </div>
                <div className='over'><Link to="/contact" style={{textDecoration:'none'}}>Contact</Link></div>


      </div>
      <div className='navbar-icons'>
        {(!severcheck) &&
          <div className='usernameclass' onClick={logout}>
            <span>
              {loginuser}
              <span style={{ marginTop: '10px' }} className="hideprofile">
                <PiUserCircleThin style={{ marginLeft: '10px' }} size={22} />
              </span>
              <span className="hideexit">
                <CiLogin style={{ marginLeft: '10px' }} size={22} />
              </span>
            </span>
          </div>
        }
        {severcheck &&
          <div id='siginhover'>
            <PiUserThin size={30} />
            <div className='siginformnav'>
             
        <div className='siginformnavtitle'>
               <div><h2 style={{fontWeight:'600',fontSize:'22px'}}>Sign in</h2></div>
               <div><p><Link to="/Signup" style={{fontWeight:'100',color:'rgb(225, 143, 43)'}}>Create an Account</Link></p></div>
             </div>
             <hr style={{marginTop:'10px',fontWeight:'100',opacity:'0.6'}}></hr>
               <form autoComplete='off' onSubmit={handlesubmit} id='homeloginform'>
                 <div>
                       <label formname='Username'>Username Or Email <span>*</span></label><br/>
                       <input type='text' name='username' id='username' placeholder='Username' ref={inputusername} onChange={(e)=>{
                          validateuser();
                              handleonchange(e);
                              }}/>{ validu && <GoVerified  id='verify' />}{ nonvalidu && <IoCloseCircleOutline id='close' />}<br/>
                      </div>
                      <div>
                            <label formname='password'>Password  <span>*</span></label><br/>
                            <input type='password' name='pwd' id='pwd' placeholder='Password' ref={inputupass} onChange={(e)=>{
                              validatepass();
                              handleonchange(e);
                              }}/>{validp && <GoVerified  id='verify' />}{ nonvalidp && <IoCloseCircleOutline id='close' />}<br/>
                      </div>
                           { errst &&
                              <p style={{color:'red'}}>***INVALID USER TRY AGAIN*** </p>
                           }
                      <div>
                            <input type='submit' value='LOGIN'/>
                      </div>
                    </form>
                    {/* <p>Lost your password?</p> */}
            </div>
          </div>
        }
        <div><PiShoppingCartThin size={30} /></div>
        <div><span><Link to="/custom"><PiShootingStarThin size={30}/></Link></span></div>
      </div>
    </div>
  );
};

export default Navbar;
