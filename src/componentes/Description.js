import React, { useEffect } from 'react';
import  './Description.css';
import girl from "../Images/girl.png"
import shap from "../Images/s.png"
import Aos from "aos";
import "aos/dist/aos.css";
import GooglePayButton from "@google-pay/button-react"



const Description = () => {
  const change = () => {
    const downloadLink = document.querySelector('.download');
    downloadLink.style.backgroundColor = '';

};
  useEffect(() => {
    Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
          <div className='detail'>
             <h1 data-aos="fade-in"  data-aos-anchor-placement="center-bottom">I'm Divyansh <span data-aos="fade-in"  data-aos-anchor-placement="center-bottom">Kushwaha</span></h1>
             <p  data-aos="fade-in"  data-aos-anchor-placement="center-bottom" >This is my personal portfolio   
             <br/>&nbsp;Detail about me and my experiences</p>
             <a className="download" href="/Divyanshresume.pdf" download="Divyanshresume.pdf" onClick={change}>DOWNLOAD CV</a>
          </div>
          <div className='image'>
                <img className='shap' src={shap}/>
                <img className='girl' src={girl}/>
            
          </div>

          <div className="donate-button">
             <h1 className='donate'
              
             >Donate</h1>
           
          </div>
        </>
        
    );
};

export default Description;


