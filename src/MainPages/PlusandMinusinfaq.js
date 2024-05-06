import React, { useState } from 'react'
import '../MainPages/PlusandMinusinfaq.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
const PlusandMinusinfaq = () => {
 const [pass1minus,setpass1minus] = useState(false);
 const [pass1plus,setpass1plus] = useState(true);
 const [pass2minus,setpass2minus] = useState(false);
 const [pass2plus,setpass2plus] = useState(true);
 let flag=false;
 let flag1=false;
  function pass1(){
    flag=flag?false:true;
    if(flag){
      document.getElementById("PlusandMinusinfaqdrop1out1").style.display="block";
      setpass1minus(true);
      setpass1plus(false);
    }
    else{
      document.getElementById("PlusandMinusinfaqdrop1out1").style.display="none";
      setpass1plus(true);
      setpass1minus(false);
    }
  }
  function pass2(){
    flag1=flag1?false:true;
    if(flag1){
        document.getElementById("PlusandMinusinfaqdrop1out2").style.display="block";
        setpass2minus(true);
        setpass2plus(false);
      }
      else{
        document.getElementById("PlusandMinusinfaqdrop1out2").style.display="none";
        setpass2plus(true);
        setpass2minus(false);
      }
    }
  return (
    <div className='PlusandMinusinfaqdrop'>
         <div id='PlusandMinusinfaqdrop1' onClick={pass1} >{ pass1minus && <FaMinus style={{marginRight:'20px'}} />}{pass1plus && <FaPlus style={{marginRight:'20px'}}/>}<span>How to shopping with Auros online?  </span> 
         </div>
            <div  id='PlusandMinusinfaqdrop1out1'>
                  <div>
                        <h1>Add items to your bag:</h1>
                            <ol>
                                <li>Ensure you are on the website.</li>
                                <li>Browse the categories across the top navigation bar which includes New In, Clothing, Bags & Accessories, Shoes, Collections, Stores, and Sale.</li>
                                <li>Once you have found an item to purchase, select your preferred colour, size (if applicable) and the quantity you wish to purchase then simply click ‘ADD TO CART’.</li>
                                <li>You can then continue shopping or click 'CHECKOUT' to review the items in your bag and to finalise your order.</li>
                            </ol>
                  </div>
                  <div>
                    <h1>Proceed to purchasing items:</h1>
                    <ol>
                      <li>Once you have finished browsing and have added the items you wish to purchase to your bag, click
                          the 'CHECKOUT' button located at the top right of the website.</li>
                        <li>
                          Within the checkout you can also amend the quantity selected for each item or delete unwanted
                          by simply clicking the 'EDIT' button that is located on the right hand side within the Order Overview
                          section of the checkout. Your amendments will be updated and allow you to proceed with the
                          checkout process.
                        </li>
                    </ol>
                  </div>
            </div>
         <div id='PlusandMinusinfaqdrop2' onClick={pass2}> {pass2minus && <FaMinus style={{marginRight:'20px'}} />}{ pass2plus &&<FaPlus style={{marginRight:'20px'}}/>}<span>Delivery Infomation</span>
          </div>
                    <div  id='PlusandMinusinfaqdrop1out2'>
                        <p>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                        </p>

                    </div>
    </div>
  )
}

export default PlusandMinusinfaq