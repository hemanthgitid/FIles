import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import Contact_grid from '../MainPages/Contact_grid'
import MainFooter from '../Footer/MainFooter'

const Contact = () => {
  return (
    <div>
       <Navbar />
      <Contact_image_make name="contact"/>
       <Contact_grid />
       <MainFooter />
    </div>
  )
}

export default Contact