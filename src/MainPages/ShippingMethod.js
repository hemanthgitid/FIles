import React from 'react'
import '../MainPages/ShippingMethod.css'
const ShippingMethod = () => {
  return (
    <div className='ShippingMethodmiddle'>
            <div className='ShippingMethodmiddlepart1'> 
                <h1>UK Delivery</h1>
                <p>We offer a UK standard and UK next day service.</p>
                    <table>
                        <thead>
                            <th>Delivery Option</th>
                            <th style={{color:'rgb(230, 152, 34)'}}>Time</th>
                            <th>Cost</th>
                        </thead>
                        <tbody>
                             <tr>
                                <td>UK Standard Delivery</td>
                                <td>3-5 working days</td>
                                <td>FREE</td>
                             </tr>
                             <tr>
                                <td>UK Next Working Day Delivery</td>
                                <td>UK Next Working Day Delivery</td>
                                <td>£4.95 - Free over £100</td>
                             </tr>
                             <tr>
                                <td>UK Next Working Day By Noon Delivery</td>
                                <td>Next working day by noon</td>
                                <td>£7.95</td>
                             </tr>
                             <tr>
                                <td>UK Saturday Delivery</td>
                                <td>Next Saturday</td>
                                <td>£10.95</td>
                             </tr>
                        </tbody>
                    </table>
                    <p style={{paddingTop:'30px'}}>Please note all orders will be despatched from Perry Ellis Europe Ltd.</p>
            </div>
            <div className='ShippingMethodmiddlepart2 reveal'>
                    <h1>UK Standard Delivery</h1>
                    <br/>
                    <p>Standard UK orders are delivered FREE</p>
                    <br/><br/><br/>
                    <p>Deliveries are made by the DPD from Monday to Saturday, and someone will need to be in to sign for your delivery.</p>
                    <br/><br/><br/>
                    <p>You can track the progress of your delivery using the link that’s provided in your order confirmation email.
                    <br/><br/>  Please note; it may take up to two working days for the first status to become available on the order tracking system.</p>
            </div>
            <div className='ShippingMethodmiddlepart2 reveal' style={{minWidth:'1300px'}}>
                    <h1>UK Next Working Day Delivery</h1><br/><br/>
                    <p>Our next working day delivery service costs £4.95 per order.</p><br/>
                        <p> You must place your order before 12.00pm for it to be delivered the next working day.</p><br/><br/><br/>
                        <p>Your order will be delivered by our courier, DPD, between 9am and 5pm, Monday to Friday, and someone will need to be in to sign for your delivery.</p><br/><br/>
                        <p>To avoid waiting around, you will receive an email notification of the estimated one-hour delivery window that your</p><br/>
                        <p>order will arrive. You can also track the progress of your delivery using the link that’s in the ‘order history’ area of your</p> <br/>
                        <p>'my account' . Please note that it can take up to 12 hours for your order to appear on the DPD system.</p><br/><br/>
                        <p>Next Working Day delivery is NOT available to the Isle of Man, Scilly Isles, Channel Islands Northern Ireland,</p><br/>
                         <p>and Scottish Highlands & Islands</p> 
            
            </div>
    </div>
  )
}

export default ShippingMethod