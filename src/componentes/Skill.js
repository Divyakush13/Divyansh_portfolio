import { Button } from '@material-ui/core';
import React from 'react';
import girl from "../Images/boy.png"
import signature from '../Images/signature.png'
import './Skill.css';

const skill = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 5000,
            behavior: 'smooth'
        });
    }; 

    const buy = () => {
        window.scrollTo({
            top: 2000,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className='skill'>
                <div className='aboutme'>
                    <img data-aos="fade-up"  className='girl' src={girl} />
                    <div className='anoutmepara'>
                        <h1 data-aos="fade-in"  data-aos-anchor-placement="center-bottom" >- About me</h1>

                        <p  data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >
"Hey, I'm Divyansh Kushwah, a passionate web developer and freelancer. With a knack for creating functional and visually appealing websites, I've tackled numerous projects that have enriched my skills. My software engineering background equips me with the problem-solving prowess to ensure both the aesthetics and functionality of my work. I'm all about embracing new challenges and staying at the forefront of the ever-changing web development realm."</p>
                        <img  data-aos="fade-up"  data-aos-anchor-placement="center-bottom" className='signature' src={signature}  />

                        <div className='button'>
                            <a  onClick={scrollToTop}   data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >Hire me</a>
                            <a  onClick={buy} data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >Buy projects</a>
                        </div>

                    </div>

                </div>


                <div className='skillsection'>
                    <div className='skilltext'data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >
                        <h1 className='myskilltxt'>- My skills</h1>
                    </div>

                    <div className='allskill'>
                            
                         {/* 1 */}
                        <div className='linesec'  data-aos="fade-up"  data-aos-anchor-placement="center-bottom">
                            <div className='texts'>
                                <h1>web devlopment</h1>
                                <h1>80%</h1>
                            </div>
                            <hr className='hr1' />
                        </div>

                        {/* 2 */}
                         
                        <div className='linesec'  data-aos="fade-up"  data-aos-anchor-placement="center-bottom">
                            <div className='texts'>
                                <h1>Android devlopment</h1>
                                <h1>60%</h1>
                            </div>
                            <hr className='hr2' />
                        </div>

                       {/* 3 */}
                       <div className='linesec'  data-aos="fade-up"  data-aos-anchor-placement="center-bottom">
                            <div className='texts'>
                                <h1>UI/Ux design</h1>
                                <h1>70%</h1>
                            </div>
                            <hr className='hr3'/>
                        </div>
                         {/* 4 */}
                         <div className='linesec'  data-aos="fade-up"  data-aos-anchor-placement="center-bottom">
                            <div className='texts'>
                                <h1>Content creation</h1>
                                <h1>80%</h1>
                            </div>
                            <hr className='hr4'/>
                        </div>





                    </div>



                </div>
            </div>

        </>
    );
};

export default skill;
