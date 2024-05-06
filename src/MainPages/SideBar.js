import React from 'react'
import '../MainPages/SideBar.css'
import Caterody from './Caterody';
import Color from './Color';
import Price from './Price';
const SideBar = ({handlechange}) => {
  return (
    <div>
 <div className='apply_fiter' id='filter' >
                         <Caterody handlechange={handlechange} />
                         <Color handlechange={handlechange}/>
                         <Price handlechange={handlechange}/>
                </div>

    </div>
  )
}

export default SideBar