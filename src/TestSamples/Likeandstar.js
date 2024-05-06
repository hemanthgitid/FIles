import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import '../TestSamples/Likeandstar.css'
const Likeandstar = ({iconcount = 5}) => {
  const [click,setclick] =useState(0);
  const [hover,sethover] =useState(0);
  const handleclick = (index) =>{
      sethover(index);
  }
   const handlemouse = (index) =>{
      setclick(index);
   }
   const onmouse = () => {
      setclick(0);
   }
  return (
    <div className='iconsrating'>
              {
                [...Array(iconcount)].map((_,index) => {
                   index+=1;
                  return <FaStar 
                         key={index}      
                        className={index<=(click||hover)?'active reat':'inactive reat'}
                        onClick={()=>handleclick(index)}
                        onMouseOver={()=>handlemouse(index)}
                        onMouseLeave={()=>onmouse()}
                    />
                })
              }
    </div>
  )
}

export default Likeandstar