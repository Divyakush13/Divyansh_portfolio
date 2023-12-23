import React from 'react';
import Navbar from "../Navbarfolder/Navbar";
import Description from "../componentes/Description";
import Testomonial from "./Testomonial"
import Skill from './Skill';
import Expertize from './Expertize';
import Contect from './Contect';
import FeturedWork from "../componentes/FeturedWork";
import Footer from './Footer';
import Login from './Login'
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
      {/* <Testomonial/> */}
      <Contect />
      <Footer />
      {/* <Login/> */}
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
