import React  from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import Cart_items from '../MainPages/Cart_items'
import MainFooter from '../Footer/MainFooter'
const Cart = () => {
  return (
    <div>
      <Navbar />
      <Contact_image_make name="Shop"/>
      <Cart_items/>
      <MainFooter />
    </div>
  )
}
export default Cart
