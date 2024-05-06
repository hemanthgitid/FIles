import React from 'react'
import Contact_image_make from '../MainPages/Contact_image_make'
import Navbar from '../Header/Navbar'
import AccountSgnup from './AccountSgnup'
import MainFooter from '../Footer/MainFooter'
const CreacteAccount = () => {
  return (
    <div>
        <Navbar />
        <Contact_image_make name="Sign Up"/>
        <AccountSgnup />
        <MainFooter />
    </div>
  )
}

export default CreacteAccount