import React from 'react';
import axios from 'axios';
import '../MainPages/Custome.css';
import cushead from '../Webimages/customehead.jpg';
import cuswood from '../Webimages/cuswood.jpg';
import cusstyle from '../Webimages/cusstyle,jpg.png'
import cusfabric from '../Webimages/cusfabric.png';
import cusfinish from '../Webimages/cusfinish.png';
import formimg from '../Webimages/customtwo.jpg';
import { useState } from 'react';
const Custome = () => {


  const [formData, setFormData] = useState({
    cusname: '',
    cusemail: '',
    cusphone: '',
    dropdis: '',
    custextarea: '',
    file: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };






  const handlecustome = async (event) => {
    event.preventDefault();
    
    const { cusname, cusemail, cusphone, dropdis, custextarea, file } = formData;

    const form = new FormData();
    form.append('cusname', cusname);
    form.append('cusemail', cusemail);
    form.append('cusphone', cusphone);
    form.append('dropdis', dropdis);
    form.append('custextarea', custextarea);
    form.append('file', file);

    try {
      const response = await axios.post('/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Reset form after successful submission
      setFormData({
        cusname: '',
        cusemail: '',
        cusphone: '',
        dropdis: '',
        custextarea: '',
        file: null
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='cusouter'>
      <div className='cushead'>
        <div className='cusheadpart1'>
          <div>
            <h1><span>Design Your </span> Custom Order</h1>
          </div>
          <div>
            <p>Share your Design Idea & Our Expert will Get Back With The Best Possible Custom Made Furniture</p>
            <p>Suggestions Online</p>
            <p>Feel Free To Make Order</p>
          </div>
        </div>
        <div className='cusheadpart2'>
          <img src={cushead} width={650} height={440} alt="Custom Head" />
        </div>
      </div>
      <h1 style={{ textAlign: 'center', margin: '1.5em', fontWeight: '400' }}>WE PERSONALIZE YOUR FURNITURE COMPLETELY!</h1>
      <div className='cusmat'>
        <div className='cusmatbor'>
          <div className='cusmatimg'>
            <img src={cuswood} width={220} height={220} alt="Wood" />
          </div>
          <div>
            <h1>Wood</h1>
            <p>Pick from the vast range of</p>
            <p>sturdy furniture woods for</p>
            <p>elegant and solid wood</p>
            <p>looking furniture</p>
          </div>
        </div>
        <div className='cusmatbor'>
          <div className='cusmatimg'>
            <img src={cusstyle} width={220} height={220} alt="Style" />
          </div>
          <div>
            <h1>Style</h1>
            <p>Get a unique design of your</p>
            <p>choice with personalized look</p>
            <p>and feel to your Dream</p>
            <p>furniture.</p>
          </div>
        </div>
        <div className='cusmatbor'>
          <div className='cusmatimg'>
            <img src={cusfabric} width={220} height={220} alt="Fabric" />
          </div>
          <div>
            <h1>Fabric</h1>
            <p>Enhance your living space</p>
            <p>with amazing fabric designs</p>
            <p>and material of your</p>
            <p>furniture.</p>
          </div>
        </div>
        <div className='cusmatbor'>
          <div className='cusmatimg'>
            <img src={cusfinish} width={220} height={220} alt="Finish" />
          </div>
          <div>
            <h1>Finish</h1>
            <p>The right finishing gives</p>
            <p>elegant and alluring look and</p>
            <p>feel to your furniture design.</p>
          </div>
        </div>
      </div>
      <div className='cusformsub'>
        <div className='cusformsubimg'>
          <div>
            <img src={formimg} alt="Custom Form" />
          </div>
          </div>
          <div >
          <form onSubmit={handlecustome}  className='cusformsubpart2'>
         <div>
          <label htmlFor="cusname">Name:</label>
          <input type="text" id="cusname" name="cusname" value={formData.cusname} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="cusemail">Email:</label>
          <input type="email" id="cusemail" name="cusemail" value={formData.cusemail} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="cusphone">Phone:</label>
          <input type="text" id="cusphone" name="cusphone" value={formData.cusphone} onChange={handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="dropdis">City:</label>
          <select id="dropdis" name="dropdis" value={formData.dropdis} onChange={handleInputChange} required>
            <option value="">------Select District-----</option>
                  <option value="ARI">Ariyalur</option>
                  <option value="CHE">Chennai</option>
                  <option value="CBE">Coimbatore</option>
                  <option value="CUD">Cuddalore</option>
                  <option value="DGL">Dindigul</option>
                  <option value="ERD">Erode</option>
                  <option value="KAL">Kallakurichi</option>
                  <option value="KAN">Kancheepuram</option>
                  <option value="KAR">Karur</option>
                  <option value="KRI">Krishnagiri</option>
                  <option value="MAD">Madurai</option>
                  <option value="NAG">Nagapattinam</option>
                  <option value="NAM">Namakkal</option>
                  <option value="PER">Perambalur</option>
                  <option value="PUD">Pudukkottai</option>
                  <option value="RAM">Ramanathapuram</option>
                  <option value="SAI">Salem</option>
                  <option value="SIV">Sivaganga</option>
                  <option value="THA">Thanjavur</option>
                  <option value="TIR">Theni</option>
                  <option value="THI">Thiruvallur</option>
                  <option value="THI">Thiruvarur</option>
                  <option value="TIR">Tiruchirappalli</option>
                  <option value="TIR">Tirunelveli</option>
                  <option value="TIR">Tirupathur</option>
                  <option value="TIR">Tiruppur</option>
                  <option value="TIR">Tiruvannamalai</option>
                  <option value="VEL">Vellore</option>
                  <option value="VIL">Viluppuram</option>
                  <option value="VIR">Virudhunagar</option>
          </select>
        </div>
        <div className='custextarea'>
          <label htmlFor="custextarea">Message:</label>
          <textarea id="custextarea" name="custextarea" value={formData.custextarea} rows={2} cols={53} onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label htmlFor="file">Demo Pic:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} required />
        </div>
        <div>
         <input type="submit" value={'Upload'} />
        </div>
      </form>
          </div>
        </div>
      </div>
    
  );
}

export default Custome;
