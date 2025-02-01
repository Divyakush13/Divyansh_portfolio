import React, { useState, useEffect } from 'react';
import './FeturedWork.css';
import "aos/dist/aos.css";
import Aos from "aos";
import SwiperCore, { Swiper, Navigation } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { useSwipeable } from 'react-swipeable';
// import { Swiper as SwiperComponent } from 'swiper/react';



const Feature = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null); // Track the active card's index

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


  const show = (previewLink) => {
    setIsOverlayVisible(true);
    setIsDivVisible(previewLink !== 'https://the-stream-frontend.vercel.app/'); // Hide the alert if preview link is available
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
      <h1 data-aos="fade-in" data-aos-anchor-placement="top-center"> Feature Work</h1>
      <div className={isLoading ? 'LoadingSpinner' : 'container'} data-aos="fade-in" data-aos-anchor-placement="top-center">
        {window.innerWidth <= 100 ? (
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
            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">

              <div className="content">
                <div className="imgBx">
                  <img src="https://cdn.dribbble.com/users/2422996/screenshots/11156751/media/9d1b1dfe183c843c271b71427e8e91cd.gif" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>The Stream<br /><span>An OTT platform</span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  {/* <a className="preview" href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}
                  <a
                    href={'https://the-stream-frontend.vercel.app/'}
                    target="_blank"
                    onClick={() => show('https://the-stream-frontend.vercel.app/')}>preview
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Divyakush13/Foodies" target="_blank" >Buy</a>
                </li>
              </ul>


              <div className='mobile'>
                <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show} target="_blank" >preview</a>
                <a className='mobilebtn' href="https://github.com/Divyakush13/Foodies" target="_blank" >Buy</a>
              </div>

            </div>

            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d826d7c8-ed2e-4c5b-a53a-639f8ed71b07/da2h0ba-4f905a80-3438-48c6-957f-3ef873f7e7f4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4MjZkN2M4LWVkMmUtNGM1Yi1hNTNhLTYzOWY4ZWQ3MWIwN1wvZGEyaDBiYS00ZjkwNWE4MC0zNDM4LTQ4YzYtOTU3Zi0zZWY4NzNmN2U3ZjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QRS0ZF08tezprVUzXqhNEH0gtzcfJgDS4rEPayaYA_A"
                    alt="src\Images\girl.png"
                  />
                </div>
                <div className="contentBx">
                  <h3>
                    The Orak
                    <br />
                    <span>AI Voice Assistance</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href={''}
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      if (e.currentTarget.href.trim() !== '') {
                        show('');
                      }
                    }}
                  >
                    preview
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Buy
                  </a>
                </li>
              </ul>

              <div className="mobile">
                <a className="mobilebtn" href="" onClick={show} target="_blank">
                  preview
                </a>
                <a className="mobilebtn" href="" target="_blank">
                  Buy
                </a>
              </div>
            </div>;

            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img src="https://media3.giphy.com/media/7x3PHPSMXSONHFuOK4/200w.gif?cid=6c09b952zj1k7ac5wvuwt1ykckswpecj9c1tpkanvanel1y2&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>AI Assistant<br /><span>Doc reader with <br></br>voice command </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href="https://voiceassistant-two.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>

                </li>
                <li>
                  <a href="https://github.com/Divyakush13/voice-assistant" target="_blank" >Buy</a>
                </li>
              </ul>

              <div className='mobile'>
                {/* <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}
                <a
                  className='mobilebtn'
                  target="_blank"
                  onClick={() => show('')}>preview
                </a>
                <a className='mobilebtn' href="https://github.com/Divyakush13/voice-assistant" target="_blank" >Buy</a>
              </div>

            </div>


            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img src="https://cdn.dribbble.com/users/43602/screenshots/4289148/food-app-animation.gif" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>Foodies<br /><span>Grab Delisious</span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    target="_blank"
                    onClick={() => show('')}>preview
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Divyakush13/Foodies" target="_blank" >Buy</a>
                </li>
              </ul>

              <div className='mobile'>
                {/* <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}
                <a
                  className='mobilebtn'
                  target="_blank"
                  onClick={() => show('')}>preview
                </a>
                <a className='mobilebtn' href="https://github.com/Divyakush13/Foodies" target="_blank" >Buy</a>
              </div>

            </div>

            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img src="https://i.pinimg.com/originals/e3/dc/a1/e3dca1d9437a51d70bc09a6e8f486b75.gif" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>Instady<br /><span>A Social App</span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    target="_blank"
                    onClick={() => show('')}>preview
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Divyakush13/Socialmeadia" target="_blank" >Buy</a>
                </li>
              </ul>
              <div className='mobile'>
                {/* <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}

                <a
                  className='mobilebtn'
                  target="_blank"
                  onClick={() => show('')}>preview
                </a>
                <a className='mobilebtn' href="https://github.com/Divyakush13/Foodies" target="_blank" >Buy</a>
              </div>
            </div>

            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img src="https://devtechnosys.com/insights/wp-content/uploads/2021/02/tinder-like-app.gif" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>Discover<br /><span>A Dating App</span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    target="_blank"
                    onClick={() => show('')}>preview
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Divyakush13/Socialmeadia" target="_blank" >Buy</a>
                </li>
              </ul>
              <div className='mobile'>
                {/* <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}
                <a
                  className='mobilebtn'
                  target="_blank"
                  onClick={() => show('')}>preview
                </a>
                <a className='mobilebtn' href="https://github.com/Divyakush13/Foodies" target="_blank" >Buy</a>
              </div>
            </div>

            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img src="https://www.cleveroad.com/images/article-previews/grocery-gif-3.gif" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>Kharido<br /><span>A Grocery Store</span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    target="_blank"
                    onClick={() => show('')}>preview
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Divyakush13/aExpress" target="_blank" >Buy</a>
                </li>
              </ul>
              <div className='mobile'>
                {/* <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}
                <a
                  className='mobilebtn'
                  target="_blank"
                  onClick={() => show('')}>preview
                </a>
                <a className='mobilebtn' href="https://github.com/Divyakush13/Foodies" target="_blank" >Buy</a>
              </div>
            </div>

            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img src="https://cdn.dribbble.com/users/209662/screenshots/3272140/jewellery_e-commerce_app_concept_by_tubik.gif" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>Dk Jewellers<br /><span>Jewellery Shop</span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href={'https://divyanshkushwahin.wordpress.com/'}
                    target="_blank"
                    onClick={() => show('https://divyanshkushwahin.wordpress.com/')}>preview
                  </a>
                  {/* <a href='https://divyanshkushwahin.wordpress.com/' onClick={show} target="_blank" >preview</a> */}
                </li>
                <li>
                  <a
                    target="_blank"
                    onClick={() => show('')}>Buy
                  </a>
                </li>
              </ul>
              <div className='mobile'>
                {/* <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}
                <a
                  className='mobilebtn'
                  href={'https://divyanshkushwahin.wordpress.com/'}
                  target="_blank"
                  onClick={() => show('href://divyanshkushwahin.wordpress.com/</li>')}>preview
                </a>
                <a
                  className='mobilebtn'
                  target="_blank"
                  onClick={() => show('')}>Buy
                </a>
                {/* <a className='mobilebtn' href="https://github.com/Divyakush13/Foodies"  target="_blank" >Buy</a> */}
              </div>
            </div>

            <div className="card" data-aos="flip-left" data-aos-anchor-placement="top-center">
              <div className="content">
                <div className="imgBx">
                  <img src="https://static.wixstatic.com/media/eb9dc8_8b6244700fed475093a79029782b060d~mv2.gif" alt="src\Images\girl.png" />
                </div>
                <div className="contentBx">
                  <h3>Fact with us<br /><span>My Blog</span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href={'https://kushwahdivyansh2.wixsite.com/website'}
                    target="_blank"
                    onClick={() => show('https://kushwahdivyansh2.wixsite.com/website')}>preview
                  </a>
                  {/* <a href='https://kushwahdivyansh2.wixsite.com/website' onClick={show} target="_blank" >preview</a> */}
                </li>
                <li>
                  <a
                    target="_blank"
                    onClick={() => show('')}>preview
                  </a>
                </li>
              </ul>
              <div className='mobile'>
                {/* <a className='mobilebtn' href='https://the-stream-frontend.vercel.app/' onClick={show}  target="_blank" >preview</a> */}
                <a
                  className='mobilebtn'
                  href={'https://kushwahdivyansh2.wixsite.com/website'}
                  target="_blank"
                  onClick={() => show('https://kushwahdivyansh2.wixsite.com/website')}>preview
                </a>
                <a
                  className='mobilebtn'
                  target="_blank"
                  onClick={() => show('')}>
                </a>
                {/* <a className='mobilebtn' href="https://github.com/Divyakush13/Foodies"  target="_blank" >Buy</a> */}
              </div>
            </div>

          </>
        )}
      </div>
      {isDivVisible && (
        <div className='alert' >
          <div className='sad-emoji'>Sorry Not Available <br />🙁</div>
          <button className='ok' onClick={() => setIsDivVisible(false)}>Don't worry</button>
        </div>
      )}
    </div>
  );
};
export default Feature;
