import React from 'react'
import '../MainPages/AboutMiddle.css'
import about1 from '../Webimages/about1.jpg'
import about2 from '../Webimages/about2.jpg'
import imgutube from '../Webimages/aboututube.jpeg'
import { FaGooglePlay } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import ReactPlayer from 'react-player'
import per from '../Webimages/aboutper.jpg'
import brand1 from '../Webimages/brand1.png'
import brand2 from '../Webimages/brand-2.png'
import brand3 from '../Webimages/brand-3.png'
import brand4 from '../Webimages/brand-4.png'
import brand5 from '../Webimages/brand-5.png'

const AboutMiddle = () => {
      function play(){
           document.getElementById("aboututubeplay").style.display="block";
          document.getElementById("aboutclose").style.display="block";
        }
        function close(){
               document.getElementById("aboututubeplay").style.display="none";
               document.getElementById("aboutclose").style.display="none";   
         }

  return (
    <div>
        <div className='aboutflex'>
                <div className='aboutflex_part1'>
                        <div>
                                <h1>Auros - Powerful Theme for Shop</h1>
                        </div>
                        <div>
                            <p>Auros curates a selection of objects focused on quality, minimalism, and functionality. Our mission is to provide a unique set of products that fascinate and inspire the user. We review each product, down to its packaging, to ensure that we continuously provide the best in both quality and design.</p>
                        </div>
                        <div>
                            <p>Our selection of products are designed and imported from all over the world. Whether from Denmark or Japan, some of these items have never received exposure in the United States. In addition, we are the exclusive North American distributor for a number of brands found within our store.</p>
                        </div>
                        <div>
                            <p>We're happy to help. If you have any questions regarding a product or an order, please feel free to reach out to us at info@domain.com.</p>
                        </div>
                </div>
                <div className='aboutflex_part2'>
                        <div  className='reveal2'>
                            <img src={about1}/>
                        </div>
                        <div  className='reveal3'>
                            <img src={about2}/>
                        </div>
                </div>
                <div className='aboutflex_part3'>
                    <div className='aboutflex_part3_head'>
                               <h1>Why Us?</h1>
                    </div>
                    <div className='aboutflex_part3_head_middle'>
                            <div>
                                <h2>24/7 Support</h2>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div>
                                <h2>Free Shipping</h2>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div>
                                <h2>Refund Anytime</h2>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                    </div>
                </div>
        </div>
        <div className='aboutimg'>
          
                <img src={imgutube}/>
               <div id='aboutplay'>
                </div>
                <FaGooglePlay id="aboutplayicon" onClick={play}/>
              <div>
                    <div id='aboututubeplay'>
                        <ReactPlayer controls url="https://youtu.be/dmE2MlXasyw?si=aIfKhqjagFJgzjLQ" width={'1400px'} height={'600px'}/>
                    </div>
                    <IoCloseOutline onClick={close}  id='aboutclose'/>
                </div>
        </div>
        <div className='aboutflex_part4'>
                    <div>
                            <div className='aboutperson'>
                                <img src={per} />
                                <div id='semicircle22'></div>
                                <p id='l1'>F</p>
                                <p id='l2'>E</p>
                                <p id='l3'>L</p>
                                <p id='l4'>I</p>
                                <p id='l5'>X</p>
                                <p id='l6'>D</p>
                                <p id='l7'>E</p>
                                <p id='l8'>S</p>
                                <p id='l9'>I</p>
                                <p id='l10'>G</p>
                                <p id='l11'>N</p>
                                    <div className='aboutpersonpara'>
                                            <p><span>"Architecture</span> tends to consume  everything else, it has become one's <span>entrie life."</span></p>
                                    </div>
                                    <p id='aboutpersonparaname'>FELIX DESIGNER.</p>
                            </div>
                    </div>
              <div className='aboutflex_part5'>
                    <div  className='reveal'><img src={brand1} width={'130px'} height={'130px'}/></div>
                    <div  className='reveal'><img src={brand2} width={'130px'} height={'130px'}/></div>
                    <div  className='reveal'><img src={brand3} width={'130px'} height={'130px'}/></div>
                    <div  className='reveal'><img src={brand4} width={'130px'} height={'130px'}/></div>
                    <div  className='reveal'><img src={brand5} width={'130px'} height={'130px'}/></div> 
            </div>
        </div>
    </div>
  )
}

export default AboutMiddle