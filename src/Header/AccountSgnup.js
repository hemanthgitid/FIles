import React from 'react'
import '../Header/AccountSgnup.css'
import { useRef} from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PiUserThin } from "react-icons/pi";
const AccountSgnup = () => {
  
  const navigate = useNavigate();
    const inputusername_signup = useRef(null);
    const inputupass_signup = useRef(null);
    const [ius1,setius1]=useState(false);
    const [ips1,setips1]=useState(false);
    const [ius2,setius2]=useState(false);
    const [ips2,setips2]=useState(false);
  
   function validateuser_signup(){
    const validUsernameregex = /^[0-9A-Za-z]{6,16}$/;
    let signinname=inputusername_signup.current.value;
    if(signinname.length===0){
      setius1(false);
      setius2(false);
      
    }
    else if(signinname.toString().length>16 || signinname.toString().length<6){
     setius1(false);
     setius2(true);
    }
    else {
        if(validUsernameregex.test(signinname)){
            console.log(signinname);
            setius1(true);
            setius2(false);
        }
        else{
            setius2(true);
            setius1(false);
          }
    }
  }

  function validatepass_signup(){
    const validpassregex =/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
    let signinpass=inputupass_signup.current.value;
    if(signinpass.length===0){
        setips1(false);
      setips2(false);
    }
    
    else if(signinpass.toString().length>16 || signinpass.toString().length<6){
        setips1(false);
     setips2(true);
    }
    else
    {
        if(validpassregex.test(signinpass)){
            console.log(signinpass);
            setips1(true);
            setips2(false);
          }
          else{
            setips2(true);
            setips1(false);
          }
    } 
  }

  const [formdatasignup, setformdatasignup] = useState({
    username: "",
    pwd: "",
  });


  function handleonchangesignup(e) {
    const { value, name } = e.target;
    setformdatasignup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  const handlesignup = async(event)=>{
    event.preventDefault();
    try{
      if(formdatasignup.username.length && formdatasignup.pwd.length){
          const datasignup= await axios.post('/signup',formdatasignup);
          if (datasignup.data.success) {
              navigate('/');
          } 
      }
      else {
        new Promise((resolve,reject)=>{
          setTimeout(()=>{
              setius2(true);
              setips2(true);
          });
        })
        new Promise((resolve,reject)=>{
          setTimeout(()=>{
              setius2(false);
              setips2(false);
          },1000);
        })
     }
    }
    catch(err){
        console.log("error");
    }
  }

  return (
    <div className='signup_outer'>
       <form  className='signup_outer_form' onSubmit={handlesignup} id='Signupform' autoComplete='off'>
        <div>
            <input type='text' name="username" id='username' placeholder='UserName' ref={inputusername_signup} onChange={(e)=>{validateuser_signup()
             handleonchangesignup(e);
            }}/><br/><br/>
           {ius1    &&       
         <p style={{color:'green', marginLeft:'10px'}}>Correct Username</p>
        }
           {
             ius2    &&       
         <p style={{color:'red', marginLeft:'10px'}}>Incorrect Username</p>
        }
        </div>
        <div>
        <input type='password' name="pwd" id='pwd' placeholder='Password' ref={inputupass_signup} onChange={(e)=>{
          validatepass_signup()
          handleonchangesignup(e);
        }}/><br/><br/>
      {
        ips1 && 
        <p style={{color:'green', marginLeft:'10px'}}>Correct Password</p>
      }  
      {
        ips2 && 
        <p style={{color:'red', marginLeft:'10px'}}>Incorrect Password</p>
      }  
        </div>
        <div>
            <input type='submit' />
        </div>
        <p>Do you have an account? <Link to='/' style={{textDecoration:'none'}} reloadDocument>Sign in <PiUserThin /></Link></p>
       </form>
    </div>
  )
}

export default AccountSgnup