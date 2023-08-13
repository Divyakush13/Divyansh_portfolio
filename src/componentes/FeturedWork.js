// import React, { useEffect } from 'react';
// import './FeturedWork.css'; // Adjust the import path
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
// import { Button } from '@material-ui/core';


// const FeaturedWork = () => {
//     useEffect(() => {
//         Aos.init({ duration: 1000, once: true }); // Initialize Aos for animations
//         new Swiper('.swiper-container', {
//             // Swiper configuration options can be added here
//         });
//     }, []);

//     return (
//         <div className="featured-work" data-aos="fade-up">
//             <h2>Featured Work</h2>
//             <div className="work-items-container">
//                 <div className="work-items swiper-container">
//                     <div className="swiper-wrapper">
//                         <div className="work-item swiper-slide">
//                             <img src="https://w0.peakpx.com/wallpaper/217/71/HD-wallpaper-lord-shiva-mahakal-bhakti-thumbnail.jpg" alt="Work 1" />
//                             <div className="work-item-content">
//                                 <h3>Work 1</h3>
//                                 <p>Description of Work 1</p>
//                             </div>
//                         </div>
//                         <div className="work-item swiper-slide">
//                             <img src="https://w0.peakpx.com/wallpaper/217/71/HD-wallpaper-lord-shiva-mahakal-bhakti-thumbnail.jpg" alt="Work 2" />
//                             <div className="work-item-content">
//                                 <h3>Work 2</h3>
//                                 <p>Description of Work 2</p>
//                             </div>
//                         </div>
//                         {/* Add more work items as needed */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeaturedWork;


import React, { useEffect } from 'react';
import './FeturedWork.css'; // Adjust the import path
import Aos from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Button } from '@material-ui/core';

const FeaturedWork = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    new Swiper('.swiper-container', {
      slidesPerView: 2, // Display 2 slides at a time
      spaceBetween: 20, // Add some space between the slides
      // Other Swiper configuration options can be added here
    });
  }, []);

  return (
    <div className="featured-work" data-aos="fade-up">
      <h2>Featured Work</h2>
      <div className="work-items-container">
        <div className="work-items swiper-container">
          <div className="swiper-wrapper">
            <div className="work-item swiper-slide">
              <img
                src="https://w0.peakpx.com/wallpaper/217/71/HD-wallpaper-lord-shiva-mahakal-bhakti-thumbnail.jpg"
                alt="Work 1"
              />
              <div className="work-item-content">
                <h3>Work 1</h3>
                <p>Description of Work 1</p>
              </div>
            </div>
            <div className="work-item swiper-slide">
              <img
                src="https://w0.peakpx.com/wallpaper/217/71/HD-wallpaper-lord-shiva-mahakal-bhakti-thumbnail.jpg"
                alt="Work 2"
              />
              <div className="work-item-content">
                <h3>Work 2</h3>
                <p>Description of Work 2</p>
              </div>
            </div>
            <div className="work-item swiper-slide">
              <img
                src="https://w0.peakpx.com/wallpaper/217/71/HD-wallpaper-lord-shiva-mahakal-bhakti-thumbnail.jpg"
                alt="Work 3"
              />
              <div className="work-item-content">
                <h3>Work 3</h3>
                <p>Description of Work 3</p>
              </div>
            </div>
            {/* Add more work items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;

