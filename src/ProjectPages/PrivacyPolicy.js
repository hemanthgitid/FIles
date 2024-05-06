import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import PrivacyPolicymiddle from '../MainPages/PrivacyPolicymiddle'
import Termsandconditionssupport from '../MainPages/Termsandconditionssupport'
import MainFooter from '../Footer/MainFooter'
const PrivacyPolicy = () => {
  return (
    <div>
            <Navbar />
            <Contact_image_make name="Privacy Policy"/>
            <PrivacyPolicymiddle />
            <Termsandconditionssupport />
            <MainFooter />
    </div>
  )
}

export default PrivacyPolicy