import React, { useEffect } from 'react';
import './Footer.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import { GiHamburgerMenu } from "react-icons/gi";
const Footer = () => {
    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    //     }, []);
    return (
        <>
            <div className='Footer'>
                <div className='detailbox'>
                    <h1 className='detail'>- +916264315576</h1>
                    <h1 className='detail'>- kushwahdivyansh2@gmail.com </h1>
                    <h1 className='detail'>- D-28 Anand Nagar ujjain(mp) India</h1>
                </div>

                <div className='iconfooter' >

                    <a href=''>
                        <LinkedIn className='tweater' />
                    </a>

                    <a href='https://www.facebook.com/divyansh.kushwah.3994'>
                        <Facebook className='facebook' />
                    </a>


                    <a href=''>
                        <Instagram className='instagram' />
                    </a>



                    <a href=''>
                        <Twitter className='tweater' />
                    </a>



                </div>


            </div>
        </>
    );
};

export default Footer;
