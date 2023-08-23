import React from 'react';
import Navbar from "../Navbarfolder/Navbar"
import Description from "../componentes/Description";
import Skill from './Skill'
import Expertize from './Expertize'
import Contect from './Contect'
import FeturedWork from "../componentes/FeturedWork"
import Footer from './Footer';
import './Header.css'
const Header = () => {
  return (
    <>
        
      {/* Navbar */}
      <Navbar>
      {isOnline ? (
        <h1>Connected to the Internet</h1>
      ) : (
        <div className="error-message">
          <p>Network is Not Available</p>
        </div>
      )} 
      </Navbar>
      {/* Description */}
      <Description />
      {/* skill */}
      <Skill />
      {/* Expertize */}
      <Expertize />

      {/* FeturedWork */}
      <FeturedWork />

      <Contect />
      <Footer/>
    </>
  );
};

export default Header;
