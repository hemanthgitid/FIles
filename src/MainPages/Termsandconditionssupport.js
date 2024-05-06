import React from 'react'
import '../MainPages/Termsandconditionssupport.css'
import { PiChatsThin } from "react-icons/pi";
import { PiTwitterLogoThin } from "react-icons/pi";
import { PiHeadsetThin } from "react-icons/pi";
import { SiApachehadoop } from "react-icons/si";
const Termsandconditionssupport = () => {
  return (
    <div className='termsandconditionssupport'>
            <h1 className='reveal'>Need a Support?</h1>
            <div className='termsandconditionssupporticons reveal'>
                <div className='icon'><PiChatsThin id='col'/>
                      <span>Chat Support</span>
                </div>
                <div className='icon'><PiTwitterLogoThin  id='col' />
                <span>Tweet Support</span>
                </div>
                <div className='icon'><PiHeadsetThin  id='col' />
                <span>Phone Consultant</span>
                </div>
                <div className='icon'><SiApachehadoop  id='col' />
                <span>Visit Our Forum</span>
                </div>
            </div>
        </div>
  )
}

export default Termsandconditionssupport