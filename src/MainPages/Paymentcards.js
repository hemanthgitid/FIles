import React from 'react'
import '../MainPages/Paymentcards.css'
import { FaRegQuestionCircle } from "react-icons/fa";
import { SiMoneygram } from "react-icons/si";
import visa from '../Webimages/visa.png'

const Paymentcards = () => {
  return (
    <div className='paymentcardsmiddle'>
        <div id='paymentcardsmiddleone'>
                <div id='paymentcardsmiddleonepart1'>
                <h1><FaRegQuestionCircle /><span>What payment methods do you accept?</span></h1>
                    <p>We accept the following payment options:</p>
                    <ul style={{listStyleType:'none'}}>
                        <li><SiMoneygram /><span>Visa</span></li>
                        <li><SiMoneygram /><span>Visa Debit</span></li>
                        <li><SiMoneygram /><span>Mastercard</span></li>
                        <li><SiMoneygram /><span>PayPal</span></li>
                        <li><SiMoneygram /><span>Apple Pay</span></li>
                       
                    </ul>
                    <div>All credit and debit card holders are subject to validation and<br/>
                        authorisation by both Auros and the card issuer, to maintain<br/>
                                security and prevent fraud.</div>
                </div>

                <div id='paymentcardsmiddleonepart2'>
                            <img src={visa} width={680} height={390}/>
                </div>
        </div>
        <hr  style={{margin:'30px', opacity:'0.3'}}/>
        <div id='paymentcardsmiddletwo'>
                <div id='paymentcardsmiddletwopart1' className='reveal'>
                    <div>
                      <h1><FaRegQuestionCircle /><span>When will payment be taken?</span></h1>
                      <p>If your card is authorised, we’ll send you an email confirming your<br/> order has been successful.</p>
                    </div>
                    <div><p>Payment will then be taken upon dispatch.</p></div>
                    <div><p>If your card is not authorised, payment will not be taken and well <br/> email you to let you know that your bank or card issuer wouldn’t authorise the payment.</p></div>
                </div>
                <div id='paymentcardsmiddletwopart2' className='reveal'>
                    <div>
                        <p>
                        Please take great care to enter all your details accurately during  checkout, as often incorrect or incomplete information can result  in your bank or card issuer declining payment.
                        </p>
                    </div>
                    <div>
                        <p>
                            If you’re unsure why your payment is declined, please contact <br/> your card issuer or bank.
                        </p>
                    </div>
                </div>

        </div>
        <hr  style={{margin:'30px', opacity:'0.3'}}/>
        <div id='paymentcardsmiddlethird' className='reveal'>
        <h1><FaRegQuestionCircle /><span>When will payment be taken?</span></h1>
                <p>We only accept payment in pounds sterling.</p>
        </div>

    </div>
  )
}

export default Paymentcards
