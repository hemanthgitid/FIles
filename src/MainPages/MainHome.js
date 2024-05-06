import React from 'react'
import '../MainPages/MainHome.css';
import white_circle from '../Webimages/circle_white.png'
import table from '../Webimages/white_circle.png'
import ceiling from '../Webimages/ciling.png'
import chair from '../Webimages/chair_home.png'
import { Link} from 'react-scroll';
const MainHome = () => {
  return (
    <div className='Homeimage'>
        <div className='Homeimage-part1'>
            <div id='one'>
                <p>LIGHTING</p>
                <p>2018</p>
            </div>
            <div id='two'>
                <h1>AURA</h1>
                <small>FROM</small> <span>$102.84</span>
                <Link to="LatestProduct_outerscroll" smooth={true} duration={10} ><div><p>Shop Now</p></div></Link>
            </div>
        </div>
        <div className='Homeimage-part2'>
             <div id='circle'>
                <img src={white_circle} alt='circle'/>
                    <div id='table'>
                       <img src={table} alt='circle'/>
                    </div>
                    <div id='chair'>
                       <img src={chair} alt='circle'/>
                    </div>
                    <div id='ceiling'>
                    <img src={ceiling} alt='circle'/>
                    </div>
             </div>
        </div>
    </div>
  )
}

export default MainHome