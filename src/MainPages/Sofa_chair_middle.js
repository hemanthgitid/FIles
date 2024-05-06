import React from 'react'
import '../MainPages/Sofa_chair_middle.css'
import stool from '../Webimages/stool_main.jpg'
import sofas from '../Webimages/sofas_main.jpg'
const Sofa_chair_middle = () => {
  return (
    <div className='middle_show'>
        <div><img src={stool} alt='stool' width={710} height={430}/>
        <span class='sofas_main'><p>Stools</p></span>
        </div>
        <div>
          <img src={sofas} alt='stool'width={710} height={430}/>
        <span class='sofas_main'><p>Sofas</p></span>
        </div>
    </div>
  )
}

export default Sofa_chair_middle