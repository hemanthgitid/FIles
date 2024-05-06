import React, { useState } from 'react'
import '../TestSamples/Colorpicker.css'
import { set } from 'mongoose';
const Colorpicker = () => {
        const [color,setcolor]=useState({
          hexcolor:"#00ABC0",
          rgbcolor:"rgb(22,0,0)",
          hslcolor:"hsl(0, 10%, 30%)",
        });
        const [colortype,setcolortype]=useState("");
        const generatenum = (num) =>{
              return Math.floor(Math.random()*num);
        }
        const handlehex = () =>{
           setcolortype("hex");
          const arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
          let hex="#";
            for(let i=0;i<6;i++)
              hex+=arr[generatenum(6)];
           setcolor({...color,hexcolor : hex});
        }
        const handlergb = () =>{
          setcolortype("rgb");
          let r =generatenum(255);
          let g =generatenum(255);
          let b =generatenum(255);
          setcolor({...color,rgbcolor :`rgb(${r},${g},${b})`})
         
        }
        const handlehsl = () =>{
          setcolortype("hsl");
          let h =generatenum(255);
          let s =generatenum(100);
          let l =generatenum(100);
          setcolor({...color,hslcolor :`hsl(${h},${s}%,${l}%)`})
         
        }

  return(
    <div className='outerclass'>
        <div style={{backgroundColor:color.hexcolor}} className='outerclassdiv'onClick={handlehex}>
        
                  <h1>HEX COLOR</h1>
                 <div className='innername'>
                  <h1> Color : {color.hexcolor} </h1>
                </div> 
             
        </div>
        <div style={{backgroundColor:color.rgbcolor}}  className='outerclassdiv' onClick={handlergb}>
                   <h1>RGB COLOR</h1>
                <div className='innername'>
                <h1> Color : {color.rgbcolor} </h1>
              </div>  
        </div>
        <div  style={{backgroundColor:color.hslcolor}} className='outerclassdiv' onClick={handlehsl}>
            <h1>HSL COLOR</h1>
            <div className='innername'>
                <h1> Color : {color.hslcolor} </h1>
              </div>
        </div>
    </div>
  )
}

export default Colorpicker