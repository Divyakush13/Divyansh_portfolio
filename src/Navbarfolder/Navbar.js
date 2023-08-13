import React from 'react';
import '../Navbarfolder/Navbar.css';
import { useState } from 'react';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [ShowmediaIcn, setShowmediaIcn] = useState(false);

  const home = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' })

  }
  const About = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' })

  }
  const Project = () => {
    window.scrollTo({ top: 2000, behavior: 'smooth' })

  }
  const conectme = () => {
    window.scrollTo({ top: 6000, behavior: 'smooth' })

  }

  return (
    <>
      <div className='navbarcont'>
        {/* imagelogo */}
        <div className='logo'>
          <h>portfolio</h>
        </div>

        {/* option */}
        <div className="option">
          {/* {setShowmediaIcn ? "mobile-menu-link" :  */}
          <ul>
            <li onClick={home}> Home</li>
            <li onClick={About}> About</li>
            <li onClick={Project}> Project</li>
            <li onClick={conectme}> conect me</li>
            {/* <li><a href=''/> Insta</li> */}
          </ul>
        </div>

        {/* social media  */}

        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li>
              <a href='https://www.facebook.com/divyansh.kushwah.3994'>
                <Facebook className='facebook' />
              </a>
            </li>

            <li>
              <a href=''>
                <Instagram className='instagram' />
              </a>
            </li>

            <li>
              <a href=''>
                <Twitter className='tweater' />
              </a>
            </li>

          </ul>

          <div className='Hamberger-menu'>
            <a href=''>
              {/* onClick={() => setShowmediaIcn(!ShowmediaIcn)} */}
              <GiHamburgerMenu />
            </a>
          </div>

        </div>

      </div>
    </>
  );
};

export default Navbar;
