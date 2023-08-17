import React from 'react';
import '../Navbarfolder/Navbar.css';
import { useState , useEffect} from 'react';
import { Facebook, Instagram, Twitter ,GitHub } from '@material-ui/icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [ShowmediaIcn, setShowmediaIcn] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const home = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' }) 

  }
  const About = () => {
    window.scrollTo({ top: 690, behavior: 'smooth' })

  }
  const Project = () => {
    window.scrollTo({ top: 1950, behavior: 'smooth' })

  }
  const conectme = () => {
    window.scrollTo({ top: 6000, behavior: 'smooth' })

  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
              <a href='https://www.instagram.com/____d_i_v_y_a_n_s_h_____/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'  target="_blank">
                <Instagram className='instagram' />
              </a>
            </li>

            <li>
              <a href='https://twitter.com/Divyakush13'  target="_blank">
                <Twitter className='tweater' />
              </a>
            </li>

            <li>
              <a href='https://github.com/Divyakush13'  target="_blank">
                <GitHub className='tweater' />
              </a>
            </li>

            <li>
              <a href='https://www.facebook.com/divyansh.kushwah.3994'  target="_blank">
                <Facebook className='facebook' />
              </a>
            </li>

          </ul>

          <div className='Hamberger-menu' onClick={toggleMenu}>
             {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>

        </div>

      </div>

      {window.innerWidth <= 768 && isMenuOpen && (

        <div className='mobile-menu'>
          <ul>
            <li onClick={home}>Home</li>
            <li onClick={About}>About</li>
            <li onClick={Project}> Project</li>
            <li onClick={conectme}>Connect Me</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
