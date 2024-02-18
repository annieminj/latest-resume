import React from 'react';
import './services.css';
import UIDesign from '../../assets/web.png';
import WebDesign from '../../assets/app.png';

const Services = () => {
  return (
    <section className='services' id='services'>
        <span className='serviceTitle'>What I do</span>
        <span className='serviceDescription'>I'm a seasoned professional with over 3 years of experience in the industry. 
                My passion lies in implementing captivating designs through front-end development. 
                I take pride in producing visually appealing, smooth, interactive and user-friendly applications.
                I have a proven track record of delivering the best results within a given time.
                When starting a new project, I thoroughly research and analyse the client's requirements and also
                I excel at building and maintaining good client relationships.
        </span>
        <div className='serviceBars'>
            <div className='serviceBar'>
                <img className='serviceBarImg' src={UIDesign} alt='WebDesign' />
                <div className='serviceBarText'>
                    <h2>Web Development</h2>
                    <p>Web app Development</p>
                </div>
            </div>
            <div className='serviceBar'>
                <img className='serviceBarImg' src={WebDesign} alt='WebDesign' />
                <div className='serviceBarText'>
                    <h2>App Development</h2>
                    <p>Building Android/iOS apps</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services