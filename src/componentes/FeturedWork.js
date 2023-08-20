import React, { useState, useEffect } from 'react';
import './FeturedWork.css'; 
import "aos/dist/aos.css";
import Aos from "aos";
import SwiperCore, { Swiper, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { useSwipeable } from 'react-swipeable';

const Feature = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleSwipe = (dir) => {
        // Handle swipe direction (left or right)
      };
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
      });
    // Simulate loading delay for demonstration purposes
    useEffect(() => {
        Aos.init({ duration: 1500 });

        loadData(); 
    }, []);

 
    const loadData = () => {
        // Simulate data loading (replace with actual data loading logic)
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    
    const show = () => {
        setIsOverlayVisible(true);
        setIsDivVisible(true);
    };

    if (isLoading) {
        return (
            <div className='LoadingSpinner'>
               <div className='spinner'></div>
            </div>
  
        );
    }
    
    return (
        <div className="containermain">
            <h1  data-aos="fade-in"  data-aos-anchor-placement="top-center"> Feature Work</h1>
            <div className={isLoading ? 'LoadingSpinner' : 'container'} data-aos="fade-in" data-aos-anchor-placement="top-center">
            {window.innerWidth <= 600 ? (
                <Swiper
            slidesPerView={1}
            navigation
            spaceBetween={20}
            loop={true}
          >
  
            {/* Add more slides as needed */}
          </Swiper>
          ) : (
            <>
                <div className="card"  data-aos="flip-left"  data-aos-anchor-placement="top-center">
                
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://cdn.dribbble.com/users/2422996/screenshots/11156751/media/9d1b1dfe183c843c271b71427e8e91cd.gif" alt="src\Images\girl.png" />
                        </div>
                        <div className="contentBx">
                            <h3>The Stream<br/><span>An OTT platform</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a className="preview" href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a>
                        </li>
                        <li>
                            <a href="https://github.com/Divyakush13/Foodies"  target="_blank" >Buy</a>
                        </li>
                    </ul>
                </div>

                <div className="card" data-aos="flip-left"  data-aos-anchor-placement="top-center">
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://cdn.dribbble.com/users/43602/screenshots/4289148/food-app-animation.gif" alt="src\Images\girl.png" />
                        </div>
                        <div className="contentBx">
                            <h3>Foodies<br/><span>Grab Delisious</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a>
                        </li>
                        <li>
                            <a href="https://github.com/Divyakush13/Foodies"  target="_blank" >Buy</a>
                        </li>
                    </ul>
                </div>

                <div className="card" data-aos="flip-left"  data-aos-anchor-placement="top-center">
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://i.pinimg.com/originals/e3/dc/a1/e3dca1d9437a51d70bc09a6e8f486b75.gif" alt="src\Images\girl.png" />
                        </div>
                        <div className="contentBx">
                            <h3>Instady<br/><span>A Social App</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href='' onClick={show}  target="_blank" >preview</a>
                        </li>
                        <li>
                            <a href="https://github.com/Divyakush13/Socialmeadia"  target="_blank" >Buy</a>
                        </li>
                    </ul>
                </div>

                <div className="card" data-aos="flip-left"  data-aos-anchor-placement="top-center">
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://devtechnosys.com/insights/wp-content/uploads/2021/02/tinder-like-app.gif
" alt="src\Images\girl.png" />
                        </div>
                        <div className="contentBx">
                            <h3>Discover<br/><span>A Dating App</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href=''  onClick={show}   target="_blank" >preview</a>
                        </li>
                        <li>
                            <a href="https://github.com/Divyakush13/Socialmeadia"  target="_blank" >Buy</a>
                        </li>
                    </ul>
                </div>

                <div className="card" data-aos="flip-left"  data-aos-anchor-placement="top-center">
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://www.cleveroad.com/images/article-previews/grocery-gif-3.gif" alt="src\Images\girl.png" />
                        </div>
                        <div className="contentBx">
                            <h3>Kharido<br/><span>A Grocery Store</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href='' onClick={show} target="_blank"  >preview</a>
                        </li>
                        <li>
                            <a href="https://github.com/Divyakush13/aExpress"  target="_blank" >Buy</a>
                        </li>
                    </ul>
                </div>

                <div className="card" data-aos="flip-left"  data-aos-anchor-placement="top-center">
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://cdn.dribbble.com/users/209662/screenshots/3272140/jewellery_e-commerce_app_concept_by_tubik.gif" alt="src\Images\girl.png" />
                        </div>
                        <div className="contentBx">
                            <h3>Dk Jewellers<br/><span>Jewellery Shop</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href='https://divyanshkushwahin.wordpress.com/' onClick={show} target="_blank" >preview</a>
                        </li>
                        <li>
                            <a href="">Buy</a>
                        </li>
                    </ul>
                </div>
  
                <div className="card" data-aos="flip-left"  data-aos-anchor-placement="top-center">
                    <div className="content">
                        <div className="imgBx">
                            <img src="https://static.wixstatic.com/media/eb9dc8_8b6244700fed475093a79029782b060d~mv2.gif" alt="src\Images\girl.png" />
                        </div>
                        <div className="contentBx">
                            <h3>Fact with us<br/><span>My Blog</span></h3>
                        </div>
                    </div>
                    <ul className="sci"> 
                        <li>
                            <a href='https://kushwahdivyansh2.wixsite.com/website' onClick={show} target="_blank" >preview</a>
                        </li>
                        <li>
                            <a href="">Buy</a>
                        </li>
                    </ul>
                </div>

                </>
          )}
                {/* ... */}
            </div>
            {isDivVisible && (
                <div className='alert'>
                    <h1>not available, sorry</h1>
                    <button className='ok' onClick={() => setIsDivVisible(false)}>Close</button>
                </div>
            )}
        </div>
    );
};
export default Feature;
