import { Button } from '@material-ui/core';
import React from 'react';
import girl from "../Images/girl.png"
import signature from '../Images/signature.png'
import './Skill.css';

const skill = () => {
    return (
        <>
            <div className='skill'>
                <div className='aboutme'>
                    <img data-aos="fade-up"  className='girl' src={girl} />
                    <div className='anoutmepara'>
                        <h1 data-aos="fade-in"  data-aos-anchor-placement="center-bottom" >- About me</h1>

                        <p  data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >You’re about to learn how easy that is to achieve.<br></br>
                            You’ll even get software You’re about to learn how easy that is to achieve. You’ll even get software developer resume examples to see exactly how it’s done. Read on, and you'll see how to write a job-winning resume for software engineer and developer jobs as robust as your finest code.
                            You’re about to learn how easy that is to achieve. You’ll even get software developer resume examples to see exactly how it’s done. Read on, and you'll see how to write a job-winning resume for software engineer and developer jobs as robust as your finest code. developer resume examples to see exactly how it’s done. Read on, and you'll see how to write a job-winning resume for software engineer and developer jobs as robust as your finest code.</p>

                        <img  data-aos="fade-up"  data-aos-anchor-placement="center-bottom" className='signature' src={signature}  />

                        <div className='button'>
                            <a href='Resume.pdf'  data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >Hire me</a>
                            <a href='Resume.pdf'  data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >hii</a>
                        </div>

                    </div>

                </div>


                <div className='skillsection'>
                    <div className='skilltext'data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >
                        <h1>- My skills</h1>
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
