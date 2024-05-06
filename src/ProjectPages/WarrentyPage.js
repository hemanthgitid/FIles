import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import Warrentyandservicesmiddle from '../MainPages/Warrentyandservicesmiddle'
import Termsandconditionssupport from '../MainPages/Termsandconditionssupport'
import MainFooter from '../Footer/MainFooter'
const WarrentyPage = () => {
  return (
    <div>
        <Navbar />
        <Contact_image_make name="Warranty and Services"/>
        <Warrentyandservicesmiddle />
        <Termsandconditionssupport />
        <MainFooter />
    </div>
  )
}

export default WarrentyPage