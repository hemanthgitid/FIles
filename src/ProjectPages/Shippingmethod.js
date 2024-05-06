import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import ShippingMethod from '../MainPages/ShippingMethod'
import Termsandconditionssupport from '../MainPages/Termsandconditionssupport'
import MainFooter from '../Footer/MainFooter'
const Shippingmethod = () => {
  return (
    <div>
         <Navbar />
        <Contact_image_make name="Shipping Method" />
        <ShippingMethod />
        <Termsandconditionssupport />
        <MainFooter />
    </div>
  )
}

export default Shippingmethod