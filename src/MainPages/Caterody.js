import React from 'react'
import '../MainPages/Caterody.css'
import Input from './Input'
const Caterody = ({handlechange}) => {
  return (
    <div id='filter_catergory'>
    <h1>PRODUCT CATEGORIES</h1>
    <div id='radio_select'>
      <p><span ><input type='radio' value=''  name='test1' onChange={handlechange} />
      All
      </span></p>         
        <Input 
          handlechange={handlechange}
          value="decor"
          title="decor"
          name='test1'
          />
        <Input 
          handlechange={handlechange}
          value="furnitures"
          title="furnitures"
          name='test1'
          />
        <Input 
          handlechange={handlechange}
          value="lightning"
          title="lightning"
          name='test1'
          />
        <Input 
          handlechange={handlechange}
          value="sofas"
          title="sofas"
          name='test1'
          />
        <Input 
          handlechange={handlechange}
          value="stools"
          title="stools"
          name='test1'
          />
    </div>
</div>
  )
}

export default Caterody