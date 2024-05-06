import React from 'react'
import '../MainPages/Blog_middle.css'
import blog1 from '../Webimages/blog1.jpg'
import blog2 from '../Webimages/blog2.jpg'
import blog3 from '../Webimages/blog3.jpg'
import blog4 from '../Webimages/blog4.jpg'
import blog5 from '../Webimages/blog5.jpg'
import blog6 from '../Webimages/blog6.jpg'
import blog7 from '../Webimages/blog7.jpg'
import blog8 from '../Webimages/blog8.jpg'
import { Link} from 'react-scroll';
import { BiSolidDisc } from "react-icons/bi";
const Blog_middle = () => {
   let flag=true;
  function show1(){
     const childElement = document.getElementById('readmeinblog_show1');
    if (childElement) 
      childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';

  }
  function show2(){
      const childElement = document.getElementById('readmeinblog_show2');
      if (childElement) 
        childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';
  }
  function show3(){
      const childElement = document.getElementById('readmeinblog_show3');
    if (childElement) 
      childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';
  }
  function show4(){
      const childElement = document.getElementById('readmeinblog_show4');
      if (childElement) 
        childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';

  }
  function show5(){
      const childElement = document.getElementById('readmeinblog_show5');
      if (childElement) 
        childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';

  }
  function show6(){
      const childElement = document.getElementById('readmeinblog_show6');
    if (childElement) 
      childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';
  }
  function show7(){
      const childElement = document.getElementById('readmeinblog_show7');
      if (childElement) 
        childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';

  }
  function show8(){
      const childElement = document.getElementById('readmeinblog_show8');
      if (childElement) 
        childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';
  }
  function show9(){
      const childElement = document.getElementById('readmeinblog_show9');
      if (childElement) 
        childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';
  }
  function show10(){
      const childElement = document.getElementById('readmeinblog_show10');
      if (childElement) 
        childElement.style.display = childElement.style.display === 'none' ? 'block' : 'none';
  }
  return (
    <div className='Blog_middle_grid'>
            <div className='Blog_middle_content'>
                <div className='Blog_middle_content_part1 '>
                      <img src={blog1} width={950} height={450}/>
                        <h1>Should you use a Shave Cream or Shave Gel?</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={show1} id='hemanth'>
                              <span>+</span>Read More
                                    <div className='readmeinblog_hide' id='readmeinblog_show1'>
                                          <div>
                                          <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                                          </div>
                                          <div>
                                          <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                                          </div>
                                          <div>
                                          <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                                          </div>
                                    </div>
                         </div>
                </div>

                <div className='Blog_middle_content_part1' id='Blog_middle_content_part2'>
                      <img src={blog2} width={950} height={450} className='reveal2'/>
                        <h1>Face the New Year with The Real Shaving Company!</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show2()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show2'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1'>
                      <img src={blog3} width={950} height={450} className='reveal3'/>
                        <h1>Face the New Year with The Real Shaving Company!</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show3()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show3'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1' id='Blog_middle_content_part4scroll'>
                      <img src={blog4} width={950} height={450} className='reveal2'/>
                        <h1>3 Ways To Make Your Blade Last Longer</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show4()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show4'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1'>
                      <img src={blog5} width={950} height={450} className='reveal3'/>
                        <h1>Fresh brew plus 12-cup coffee maker</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show5()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show5'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1'>
                      <img src={blog1} width={950} height={450} className='reveal2'/>
                        <h1>8 Tips for making better coffee with a drip coffee maker</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show6()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show6'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1'>
                      <img src={blog3} width={950} height={450} className='reveal3'/>
                        <h1>Which Coffeemaker is Right for Me?</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show7()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show7'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1'>
                      <img src={blog6} width={950} height={450} className='reveal2'/>
                        <h1>How to clean a coffee maker</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show8()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show8'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1' id='Blog_middle_content_part9'>
                      <img src={blog7} width={950} height={450} className='reveal3'/>
                        <h1>Out and about with your baby</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show9()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show9'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>

                <div className='Blog_middle_content_part1' id='Blog_middle_content_part10'>
                      <img src={blog8} width={950} height={450} className='reveal2'/>
                        <h1>The Top 5 Stroller mistakes</h1><br/>
                        <span style={{
                            fontSize: '18px',
                            fontWeight: '100'
                        }}>HEALTHY, OTHER / September 11, 2018</span>
                        <br/> <br/> <br/> <br/>
                        <span style={{
                              lineHeight: '33px',
                              fontSize: '19px',          
                              fontWeight: '100'
                        }}>The first  thing you need to do is a sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines” A lot of times, people are thrown off by the idea of taking the time to set their goals.</span>
                        <div className='readmeinblog' onClick={()=>{show10()}}><span>+</span>Read More</div>
                        <div className='readmeinblog_hide' id='readmeinblog_show10'>
                              <div>
                              <h1>Keeping one's self going is a difficult thing to do. There are a million distractions that occur every day and that can mean that we do not stay on track with what we should be doing.</h1>
                              </div>
                              <div>
                                 <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yourself completing or obtaining your goal. What you profess, you possess!</p>
                              </div>
                              <div>
                              <p>The first thing you need to do is sit down and set your goals. Diana Scharf Hunt said “Goals are dreams with deadlines.” A lot of times, people are thrown off by the idea of taking the time to set their goals. </p>
                              </div>
                        </div>
                </div>
            </div>
                <hr style={{opacity:'0.2'}}></hr>
            <div className='Blog_middle_content_navbar'>
                  <div className='catergories_blog'>
                          <h1>CATEGORIES</h1>
                          <Link to="Blog_middle_content_part2"><div><span><BiSolidDisc /></span>Fashion</div></Link>
                          <Link to="Blog_middle_content_part4scroll"><div><span><BiSolidDisc /></span>Healthy</div></Link>
                          <Link to="Blog_middle_content_part9"><div><span><BiSolidDisc /></span>Other</div></Link>
                          <Link to="Blog_middle_content_part10"><div><span><BiSolidDisc /></span>Photography</div></Link>
                  </div>
                  <div className='Recent_posts_blog'>
                                    <h1>RECENT POSTS</h1>
                              <div className='Recent_posts_blog_deep'>
                                    <div>
                                       <img src={blog1} width={125} height={125} />
                                    </div>
                                 
                                    <div id='Recent_posts_blog_container'>
                                      <h2>Should you use a Shave Cream or Shave Gel?</h2>
                                      <p>September 11, 2018</p>
                                    </div>
                              </div>
                              <div className='Recent_posts_blog_deep'>
                                    <div>
                                       <img src={blog2} width={125} height={125} />
                                    </div>
                                 
                                    <div id='Recent_posts_blog_container'>
                                      <h2>Face the New Year with The Real Shaving</h2>
                                      <p>September 10, 2018</p>
                                    </div>
                              </div>
                              <div className='Recent_posts_blog_deep'>
                                    <div>
                                       <img src={blog3} width={125} height={125} />
                                    </div>
                                 
                                    <div id='Recent_posts_blog_container'>
                                      <h2>Face the New Year with The Real Shaving</h2>
                                      <p>September 21, 2018</p>
                                    </div>
                              </div>
                              <div className='Recent_posts_blog_deep'>
                                    <div>
                                       <img src={blog5} width={125} height={125} />
                                    </div>
                                 
                                    <div id='Recent_posts_blog_container'>
                                      <h2>3 Ways To Make Your Blade Last Longer</h2>
                                      <p>September 6, 2018</p>
                                    </div>
                              </div>
                              <div className='Recent_posts_blog_deep'>
                                    <div>
                                       <img src={blog4} width={125} height={125} />
                                    </div>
                                 
                                    <div id='Recent_posts_blog_container'>
                                      <h2>Fresh brew plus 12-cup coffee maker</h2>
                                      <p>September 18, 2018</p>
                                    </div>
                              </div>
                             
                  </div>
                  <div id='ads_blog'>
                        <img src={blog6} width={450} height={300} />
                        <div>
                        <p>Put your ads here</p>
                        <h2>SPACE FOR ADS</h2>
                        </div>
                  </div>
            </div>
    </div>
  )
}

export default Blog_middle