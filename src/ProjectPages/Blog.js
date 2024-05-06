import React from 'react'
import Navbar from '../Header/Navbar'
import Contact_image_make from '../MainPages/Contact_image_make'
import Blog_middle from '../MainPages/Blog_middle'
import MainFooter from '../Footer/MainFooter'
const Blog = () => {
  return (
    <div>
        <Navbar />
      <Contact_image_make name="Blog"/>
      <Blog_middle />
      <MainFooter />
    </div>
  )
}

export default Blog