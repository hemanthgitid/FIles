import React from 'react'
import '../MainPages/OurBlog.css'
import blog1 from '../Webimages/blog1.jpg';
import blog2 from '../Webimages/blog2.jpg';
import blog3 from '../Webimages/blog3.jpg';
import {Link} from 'react-router-dom';
const OurBlog = () => {
  return (
    <div className='OurBlog'>
            <div className='OurBlogHeader'>
                <h1>Our Blogs</h1>
                <p>Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights.</p>
            </div>
            <div className='OurBlog_blog'>
                    <div className='OurBlog_blog_div'>
                      <div>
                        <img src={blog1} width={480} height={340}  alt="text"/>
                      </div>
                   <Link to="/blog" style={{textDecoration:'none'}} reloadDocument><h1>Should you use a Shave Cream or Shave Gel?</h1></Link>
                    <br></br><br></br>
                    <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are...</p>
                    <span><p>+ READ MORE</p></span>
                    </div>
                    <div className='OurBlog_blog_div'>
                      <div>
                          <img src={blog2} width={480} height={340}  alt="text"/>
                      </div>
                      <Link to="/blog" style={{textDecoration:'none'}} reloadDocument><h1>Face the New Year with The Real Shaving Company!</h1></Link>
                    <br></br><br></br>
                    <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are...</p>
                    <span><p>+ READ MORE</p></span>
                    </div>
                    <div className='OurBlog_blog_div'>
                      <div>
                       <img src={blog3} width={480} height={340}/>
                      </div>
                      <Link to="/blog" style={{textDecoration:'none'}} reloadDocument> <h1>Face the New Year with The Real Shaving Company!</h1></Link>
                   <br></br><br></br>
                    <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are...</p>
                    <span><p>+ READ MORE</p></span>
                    </div>
            </div>
            <div className='OurBlog_foo'>
            <p>
              <span  className='reveal2'> Very </span> 
              <span  className='reveal'> good </span> 
              <span  className='reveal2'> Design. </span> 
              <span  className='reveal'> Flexible. </span> 
              <span  className='reveal2'> Fast Support. </span> 
              <span  className='reveal'> Fast Support. </span> 
              <span  className='reveal2'> - </span> 
              <span  className='reveal'>Steve John (customer)</span></p>
            </div>
    </div>
  )
}

export default OurBlog