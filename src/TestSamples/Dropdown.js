import React, { useState } from 'react'
import data from './data'
import '../TestSamples/Dropdown.css'
const Dropdown = () => {

  const [single,setsingle]=useState(null);
  const [multiple,setmultiple]=useState(false);
  const [arr,setarr]=useState([]);
   const handlesingle = (id) =>{
        setsingle(id=== single ?null:id);
   }
   const handlemultiple = (id) =>{
         let copyarr = [...arr];

         if(copyarr.indexOf(id)!==-1){
           copyarr.splice(copyarr.indexOf(id),1);
        }
        else{
          copyarr.push(id);
         }
         setarr(copyarr);
         console.log(id);
   }
  return (
    <div className='overall'>
          <div> 
              <button onClick={()=>{setmultiple(!multiple)}}>MULTIPLE OPENS</button>
            </div>
        {
             data.map((index,i) => (
            <div key={i} onClick={multiple?()=>{handlemultiple(index.id)}:()=>{handlesingle(index.id)}} className='questions'>
                {
                  index.question
                } 
                <br/>
                  {
                    multiple && arr.indexOf(index.id)!==-1  ?
                    <div key={i}>
                    {index.answer}
                    </div>
                    :
                    single===index.id &&  
                    <div key={i}>
                      {index.answer}
                     </div>
                  }
              </div>
            ))
        }
      
    </div>
  )
}

export default Dropdown