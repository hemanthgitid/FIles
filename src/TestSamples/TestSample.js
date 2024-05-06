// import React, { useRef, useState } from 'react'
// import '../TestSamples/TestSample.css'
// const TestSample = () => {
//     const [items,setitems]=useState([]);
//     const [arr,setarr]=useState([]);
//     const handlesubmt = (ele) =>{
//         if(!items.includes(ele))
//             setitems([...items,ele]);
//         else
//             setitems(items.filter(it => it!==ele ));
//     }
   
//     const handlekeyup = (event) =>{
//         if(event.key==='Enter'){
//             handleadd();
//         }
//     }
//     const myref= useRef(null);
//     const handleadd = ()=>{
//         if(myref.current.value.length>0 && !arr.includes(myref.current.value))
//         setarr([...arr,myref.current.value]);
//         myref.current.value='';
//     }

//     const handlesubmit = (ele) =>{
//                 setarr(arr.filter(item => item!== ele));
//                 setitems(items.filter(item => item!==ele));
//     }
//   return (
//     <>
//             <div style={{textAlign:"center",padding:"2em"}}>
//                 <h1 style={{margin:"1em"}}>
//                     ADD CHECKER
//                 </h1>
                
//                 <input type="text" name="content" style={{outline:'none',fontSize:'20px'}} ref={myref} onKeyUp={handlekeyup}/>
//                 <input type="submit" value="submit" onClick={handleadd}  id='inputsubmit'  style={{padding:'1em',marginLeft:"1em",cursor:'pointer'}}/>

//             </div>

//             <div className='display-items'>

//                 <div className='display-items_1'>

//                     <ol>    
//                             {
//                                 arr.map((ele,index)=>(
//                                     <div  className='display-items_1_in'>
//                                         <li key={index}>{ele}</li>
//                                         <input type="checkbox" name='check-box' checked={items.includes(ele)} onClick={()=>handlesubmt(ele)} />
//                                         <input type="submit" name='delete' value="DELETE" onClick={()=>handlesubmit(ele)} style={{marginLeft:'2em',padding:'0.4em', cursor:'pointer'}}/>
//                                     </div>
//                                 ))
//                             }

//                         </ol> 


//                 </div>

//                 <div className='display-items_2 display-items_2_in'>
//                     <ul>
//                         {
//                                 items.map((ele,index)=>(
//                                 <li id='idlist' key={index}>{ele}</li>
//                                 ))
//                         }
//                     </ul>


//                 </div>
               

//             </div>
    
//     </>
//   )
// }

// export default TestSample






import React, { useRef, useState } from 'react'
import '../TestSamples/TestSample.css'
const TestSample = () => {

    localStorage.setItem('arr',[]);
    localStorage.setItem('result',[]);
    const [items,setitems]=useState([]);
    const [arr,setarr]=useState([]);
    const handlesubmt = (ele) =>{
        if(!items.includes(ele))
            setitems([...items,ele]);
        else
            setitems(items.filter(it => it!==ele ));
    }
   
    const handlekeyup = (event) =>{
        if(event.key==='Enter'){
            handleadd();
        }
    }
    const myref= useRef(null);
    const handleadd = ()=>{
        if(myref.current.value.length>0 && !arr.includes(myref.current.value))
        setarr([...arr,myref.current.value]);
        myref.current.value='';
    }

    const handlesubmit = (ele) =>{
                setarr(arr.filter(item => item!== ele));
                setitems(items.filter(item => item!==ele));
    }
  return (
    <>
            <div style={{textAlign:"center",padding:"2em"}}>
                <h1 style={{margin:"1em"}}>
                    ADD CHECKER
                </h1>
                
                <input type="text" name="content" style={{outline:'none',fontSize:'20px'}} ref={myref} onKeyUp={handlekeyup}/>
                <input type="submit" value="submit" onClick={handleadd}  id='inputsubmit'  style={{padding:'1em',marginLeft:"1em",cursor:'pointer'}}/>

            </div>

            <div className='display-items'>

                <div className='display-items_1'>

                    <ol>    
                            {
                                arr.map((ele,index)=>(
                                    <div  className='display-items_1_in'>
                                        <li key={index}>{ele}</li>
                                        <input type="checkbox" name='check-box' checked={items.includes(ele)} onClick={()=>handlesubmt(ele)} />
                                        <input type="submit" name='delete' value="DELETE" onClick={()=>handlesubmit(ele)} style={{marginLeft:'2em',padding:'0.4em', cursor:'pointer'}}/>
                                    </div>
                                ))
                            }

                        </ol> 


                </div>

                <div className='display-items_2 display-items_2_in'>
                    <ul>
                        {
                                items.map((ele,index)=>(
                                <li id='idlist' key={index}>{ele}</li>
                                ))
                        }
                    </ul>


                </div>
               

            </div>
    
    </>
  )
}

export default TestSample


