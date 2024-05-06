import React from 'react'
import '../MainPages/Contact_grid.css'
import axios from 'axios'
const Contact_grid = () => {
  const handlecontact = async(event) => {
    event.preventDefault();
    alert('hello')
      const name = document.getElementById('conname').value;
      const email = document.getElementById('conemail').value;
      const msg = document.getElementById('conmessage').value;
      const subscribe = document.getElementById('concheck').checked;
      const data = {
        conname: name,
        conemail: email,
        conmessage: msg,
        concheck: subscribe
       };
       await axios.post('/uploadcontact',data)
       .then(()=>{
        console.log("success")
        //    new Promise(resolve => setTimeout(() => {
            document.getElementById('conout').reset();
            
        //     resolve();
        //   }, 2000));
        })
       .catch((error)=>{console.log(error)});
    }
  return (
    <div className='Contact_grid_box'>
            <div className='Contact_grid_box_head'>
                <div className='left_contact'>
                    <p>CONTACT</p>
                    <h1>INFOMATION</h1>
                </div>
                <div id='contact_address_permanant'>
                    <div><p>Add:</p></div>
                    <div><p>2593 Timbercrest Road, Chisana, Alaska Badalas United State</p></div>
                    <div><p>Phone:</p></div>
                    <div><p>(+91)7-723-4608</p></div>
                    <div><p>Mail:</p></div>
                    <div><p>Aurosfurniture@domain.vn</p></div>
                </div>
            </div>
            <div className='Contact_grid_box_form'>
                    <div className='left_contact'>
                        <p>CONTACT</p>
                            <h1>DROP US A LINE</h1>
                    </div>
                    <div className='contact_form'>
                        <form onSubmit={handlecontact}  id='conout'>
                            <div>
                                <label forname='name'>Your Name:</label><br/>
                                <input type='text' name='conname' id='conname' placeholder='EX: John Doe'/><br/>
                            </div>
                            <div>
                                <label forname='name'>E-Mail:</label><br/>
                                <input type='email' name='conemail' id='conemail' placeholder='EX: John_Doe@domain.com'/><br/>
                            </div>
                            <div>
                                <label forname='name'>Message:</label><br/>
                                    <textarea rows={13} cols={85} placeholder='Enter text here' id='conmessage' name='conmessage' ></textarea><br/>
                            </div>
                            <div id='contact_form_subscribe'>
                            <input type='checkbox' id='concheck' name='concheck'/>
                              <span>Also Subscribe Us</span>
                            </div>
                            <div>
                            <input type='submit'  value={'Send Message'}/>
                            </div>
                        </form >
                    </div>
            </div>
                <div id='Contact_grid_box_map_box2'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7826.723764533848!2d78.86976864981106!3d11.23476721685454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1b80cc215d7d%3A0xc8e396e0c9181a75!2sLAKSHMI%20STORE!5e0!3m2!1sen!2sin!4v1704905749526!5m2!1sen!2sin" width="1070" title='location' height="420" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            
    </div>
  )
}

export default Contact_grid