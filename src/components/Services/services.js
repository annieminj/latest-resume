import React from 'react';
import './services.css';
import UIDesign from '../../assets/web.png';
import WebDesign from '../../assets/app.png';

const Services = () => {
  return (
    <section className='services' id='services'>
        <span className='serviceTitle'>What I do</span>
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