import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import AddWish from '../MainPages/AddWish'
import MainFooter from '../Footer/MainFooter'
const WishList = () => {
  return (
    <div>
        <Navbar />
      <Contact_image_make name="WishList"/>
      <AddWish />
      <MainFooter />
    </div>
  )
}

export default WishList