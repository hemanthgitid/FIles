import React from 'react'
import '../MainPages/Contact_image_make.css'
import flowerpot from '../Webimages/Contact_floorPot.jpg'
const Contact_image_make = (props) => {
  return (
    <div className='outer_image_make'>
        <img src={flowerpot} width={240} height={240} id='img_make'/>
        <div><h1>{props.name}</h1></div>
    </div>
  )
}

export default Contact_image_make