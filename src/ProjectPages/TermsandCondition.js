import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import Termsandconditionmiddle from '../MainPages/Termsandconditionmiddle'
import Termsandconditionssupport from '../MainPages/Termsandconditionssupport'
import MainFooter from '../Footer/MainFooter'

const TermsandCondition = () => {
  return (
    <div>
        <Navbar />
        <Contact_image_make name="Terms and Condition"/>
        <Termsandconditionmiddle />
        <Termsandconditionssupport />
        <MainFooter />
    </div>
  )
}

export default TermsandCondition