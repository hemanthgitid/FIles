import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import Product from '../MainPages/Product'
import MainFooter from '../Footer/MainFooter'
const ProductList = (props) => {
  return (
    <div>
     <Navbar />
      <Contact_image_make name="Product"/>
      <Product />
      <MainFooter />
    </div>
  )
}

export default ProductList