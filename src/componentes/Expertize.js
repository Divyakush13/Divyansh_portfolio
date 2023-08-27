import React, { useEffect } from 'react';
import './Expertize.css';
import ui from '../Images/ui.png'
import Aos from "aos";
import "aos/dist/aos.css";
import content from '../Images/content.png'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { colors } from '@material-ui/core';
const Expertize = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
    }, []);
  return (
    <>
      <div className='Expertize_main_con'>
        <div className='Expertizes'>
      
      <h1  data-aos="fade-in"  data-aos-anchor-placement="top-center"> - My Expertize</h1>
      <div className='all' >
          <div className='Exdetail'  data-aos="fade-right">
            {/* <img src={ui} alt='image' /> */}
            <CloudUploadIcon style={{color:'#EEC673' , height:'40px', width:'40px', marginBottom:'15px'}}/>
            <h2>web Hosting</h2>
          </div>

          <div className='Exdetail'  data-aos="fade-left">
            {/* <img src={content} alt='image' /> */}
            <DesignServicesIcon style={{color:'#EEC673' , height:'40px', width:'40px', marginBottom:'15px'}}/>
            <h2>ui/ux Design</h2>
            {/* <p>i am ui ux designer</p> */}
          </div>

          <div className='Exdetail'  data-aos="fade-right">
            {/* <img src='' alt='image' /> */}
            <WebIcon style={{color:'#EEC673' , height:'40px', width:'40px', marginBottom:'15px'}}/>
            <h2>web Design</h2>
            {/* <p>i am ui ux designer</p> */}
          </div>
          <div className='Exdetail'  data-aos="fade-left">
            {/* <img src='' alt='image' /> */}
            <FilterDramaIcon style={{color:'#EEC673' , height:'40px', width:'40px', marginBottom:'15px'}}/>

            <h2>Backend</h2>
            {/* <p>i am ui ux designer</p> */}
          </div>
           <div className='Exdetail'  data-aos="fade-right">
            {/* <img src='' alt='image' /> */}
            <TravelExploreIcon style={{color:'#EEC673' , height:'40px', width:'40px', marginBottom:'15px'}}/>
            
            <h2>SEO</h2>
            {/* <p>i am ui ux designer</p> */}
          </div>
         </div>
        </div>
      </div>




<div className='body'>
 <div className='myExpertise'>
  <h1 data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >My Expertize</h1>
 </div>
      <div className="allele" >
        <div className="lefter">
          <div className="text">Hosting</div>
        </div>
        <div className="left">
          <div className="text">Web Design</div>
        </div>
        <div className="center">
          <div className="explainer"><span>Expertise</span></div>
          <div className="text">Frontend Development</div>
        </div>
        <div className="right">
          <div className="text">Backend Development</div>
        </div> 
        <div className="righter">
          <div className="text">SEO</div>
        </div>
      </div>

      </div>



    </>
  );
};

export default Expertize;
