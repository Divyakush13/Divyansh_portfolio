import React from 'react';
import Navbar from "../Navbarfolder/Navbar";
import Description from "../componentes/Description";
import Metromonial from "../componentes/Metromonial"
import Skill from './Skill';
import Expertize from './Expertize';
import Contect from './Contect';
import FeturedWork from "../componentes/FeturedWork";
import Footer from './Footer';
import './Header.css';

const Header = ({ isOnline }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Render the rest of the content */}
      <Description />
      <Skill />
      <Expertize />
      <FeturedWork />
      {/* <Metromonial/> */}
      <Contect />
      <Footer />
      
      {/* Conditionally render error message if not online */}
      {!isOnline && (
        <div className="error-message">
          <p>Network is Not Available</p>
        </div>
      )}
    </>
  );
};

export default Header;
