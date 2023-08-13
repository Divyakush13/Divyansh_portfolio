import React from 'react';
import { useState } from 'react';
import "./Contect.css"
import TextField from '@mui/material/TextField';

const Contect = () => {

  return (

    <>
      <div className='main'>
        <div className='form'>
          <h1 className='contectHead'>contect me</h1>
          {/* <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />  
                <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />  
                <TextField className='textfield' id="outlined-basic" label="Outlined" variant="outlined" />   */}
          <input className='textfield' type='text' placeholder='Full Name' />
          <input className='textfield' type='email' placeholder='Email' />
          <textarea className='massege' type='text' placeholder='Write massage here...' />
         <button className='sentbtn' >Send Massage</button>
        </div>

        <h className='slogan' >Let's make something new diffrent and more meaningfull or make thingh more visual and conceptual? <span>Just say Hello !</span></h>


      </div>
    </>
  );
};

export default Contect;
