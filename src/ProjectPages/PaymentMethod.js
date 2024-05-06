import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import Paymentcards from '../MainPages/Paymentcards'
import Termsandconditionssupport from '../MainPages/Termsandconditionssupport'
import MainFooter from '../Footer/MainFooter'
const PaymentMethod = () => {
  return (
    <div>
        <Navbar />
        <Contact_image_make name="Payment Method" />
        <Paymentcards />
        <Termsandconditionssupport />
        <MainFooter />
    </div>
  )
}

export default PaymentMethod