import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import AboutMiddle from '../MainPages/AboutMiddle'
import MainFooter from '../Footer/MainFooter'
const AboutPage = () => {
  return (
    <div>
         <Navbar />
      <Contact_image_make name="About"/>
      <AboutMiddle />
      <MainFooter />
    </div>
  )
}

export default AboutPage