import React, { useState } from 'react';
import "./Contect.css";
const Contect = () => {
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mvojkbyd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        // Clear form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Error sending email');
        alert('Error sending email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <>
      <div className='main'>
        <div className='form'>
          <h1 className='contectHead'>Contact Me</h1>
          <input
            className='textfield'
            type='text'
            placeholder='Full Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='textfield'
            type='email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className='massege'
            placeholder='Write message here...'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
          <button className='sentbtn' onClick={handleSubmit}>Send narendra</button>
        </div>

        {showSuccessMessage && (
          <div className="success-message">
            <p>Email sent successfully!</p>
          </div>
        )}

        <h1 className='slogan'>
          Let's make something new, different, and more meaningful. <span>Just say Hello!</span>
        </h1>
      </div>
    </>
  );
};

export default Contect;
