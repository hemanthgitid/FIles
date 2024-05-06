import React, { useEffect, useState } from 'react'
import '../TestSamples/ImageSlider.css'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
const ImageSlider = () => {
    const [images,setimages]=useState(null);
    const [error,seterror]=useState(null);
    const [loading,setloading]=useState(false);
    async function fetchimages(url){
        try{
            setloading(true);
            const responce=await fetch(url);
            const data=await responce.json();
            if(data){
                setimages(data);
            }
            console.log(data);
            setloading(false);
        }
        catch(e){
            setloading(false);
            seterror(e);
        }
    }
    const url='https://picsum.photos/v2/list?page=1&limit=10';
    useEffect(()=>{
        if(url!=="")
            fetchimages(url);
    },[url]);
  return (
    <div>
          {
                loading
                 && 
                <p>The Website loading.....</p>
          }
                {
                    error &&
                     <p>ERROR OCCURED FIGURE OUT!!!!!!!</p>
                }
            <div className='container'>
                <BsArrowLeftCircleFill />
                { images && images.length ?
                    images.map(index=>(
                        <img 
                        key={index.id}
                        src={index.download_url}
                        width={200}
                        height={100}
                        className='current-image'
                        />     
                    ))
                    : null
                }
                <BsArrowRightCircleFill />
                </div>

            <span>
                {
                    images && images.length ?
                    images.map((_,index)=><button
                    key={index}
                    className='current_indicator'
                    ></button>)
                    
                    : null
                }
            </span>
            
       </div>
  )
}

export default ImageSlider