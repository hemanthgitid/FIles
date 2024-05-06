import React from 'react'
import Input from './Input'
import '../MainPages/Color.css'
const Color = ({handlechange}) => {
  return (
    <div id='radio_color_select'>
                            <h1>FILTER BY COLOR</h1>
                            <Input 
                            handlechange={handlechange}
                            value="black"
                            title="black"
                            name='test4'
                            
                            />
                            <Input 
                            handlechange={handlechange}
                            value="white"
                            title="white"
                            
                            name='test4'
                            />
                            <Input 
                            handlechange={handlechange}
                            value="bisque"
                            title="bisque"
                            name='test4'
                          
                            />
                        </div>
  )
}

export default Color