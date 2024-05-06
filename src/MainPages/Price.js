import React from 'react'
import Input from './Input'
import '../MainPages/Price.css'
import { IoReload } from 'react-icons/io5'
const Price = ({handlechange}) => {
  return (
    <div id='radio_color_select'>
                            <h1>FILTER BY PRICE</h1>
                            <p><span><input type='radio' value=''  name='test3' onChange={handlechange} />All</span></p>         
                            <Input 
                            handlechange={handlechange}
                            value={50}
                            title="$0 - $50"
                            name='test3'
                            />
                            <Input 
                            handlechange={handlechange}
                            value={100}
                            title="$50 - $100"
                            name='test3'
                            />
                            <Input 
                            handlechange={handlechange}
                            value={200}
                            title="$100 - $200"
                            name='test3'
                            />
                              <div style={{textAlign:'center', fontSize:'24px', cursor:'pointer'}}>CLEAR FILTER</div>
                        </div>
  )
}

export default Price