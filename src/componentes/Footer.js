import React, { useEffect , useState} from 'react';
import './Footer.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowCircleUp } from 'react-icons/fa';
import Website from '@mui/icons-material/Language';


const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 300) {
            setShowScrollButton(true);
          } else {
            setShowScrollButton(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <>
        
            <div className='Footer'>
            
                <div className='detailbox'>
                    <h1 className='detail'>- +916264315576</h1>
                    <h1 className='detail'>- kushwahdivyansh2@gmail.com </h1>
                    <h1 className='detail' href = 'https://goo.gl/maps/kNCYfCQHfMFkNiYc9'>- D-28 Anand Nagar ujjain(mp) India</h1>
                </div>

                <div className='iconfooter' >

                    <a href='https://www.linkedin.com/in/divyansh-kushwah/'  target="_blank">
                        <LinkedIn className='tweater' />
                    </a>

                    <a href='https://www.facebook.com/divyansh.kushwah.3994'  target="_blank">
                        <Facebook className='facebook' />
                    </a>


                    <a href='https://www.instagram.com/____d_i_v_y_a_n_s_h_____/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'  target="_blank">
                        <Instagram className='instagram' />
                    </a>



                    <a href='https://twitter.com/Divyakush13'  target="_blank">
                        <Twitter className='tweater' />
                    </a>

                    <a href='https://github.com/Divyakush13'  target="_blank">
                        <GitHub className='tweater' />
                    </a>

                    <a href='https://kushwahdivyansh2.wixsite.com/gatiman'  target="_blank">
                        <Website className='tweater' />
                    </a>

                </div>
                

            </div>
            {showScrollButton && (
  <button
    className="scroll-button"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    style={{ fontSize: '24px', width: '40px', height: '40px' }}

  >
    <FaArrowCircleUp />
  </button>
)}

        </>
    );
};

export default Footer;
