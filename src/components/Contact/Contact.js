import React from 'react';

// Define the styles for the iframe
const iframeStyles = {
  border: '1px solid #000',
  borderRadius: '10px',
  width: '100%', // Default width for smaller screens
  display: 'block',
  margin: '0 auto',
  marginTop: '20px',
  marginBottom: '20px',
  marginLeft: '20px',
  marginRight: '20px',
};
const headingStyles ={
  textAlign : 'center'
}
const Form = () => {
  return (
    <div className="form-container">
      <h2 style={headingStyles}>Our Location</h2> 
      <iframe
    
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3326.3628924800823!2d73.2320032!3d33.5179494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff15ca86bdb0f%3A0xa3c25274182c4948!2sCarer%20Pharma!5e0!3m2!1sen!2s!4v1698502667216!5m2!1sen!2s"
        style={iframeStyles}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <form>
        <h1>Contact <span>Here</span></h1>
        <input type="text" name="Name" id="" placeholder='Enter Name' />
        <input type="text" name="Email" id="" placeholder='Example@gmail.com' />
        <input type="text" name="Phone" id="" placeholder='+92-3682683' />
        <textarea name="Message" id="" cols="30" rows="10" placeholder='Type Here.....' />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
