import React from 'react';
import './skills.css';
import UIDesign from '../../assets/11.jpeg';
import WebDesign from '../../assets/13.jpeg';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>I'm a seasoned professional with over 3 years of experience in the industry. 
                My passion lies in implementing captivating designs through front-end development. 
                I take pride in producing visually appealing, smooth, interactive and user-friendly applications.
                I have a proven track record of delivering the best results within a given time.
                When starting a new project, I thoroughly research and analyse the client's requirements and also
                I excel at building and maintaining good client relationships.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img className='skillBarImg' src={UIDesign} alt='UIDesign' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Designing Web/App interfaces</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={WebDesign} alt='WebDesign' />
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>Web app Development</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={WebDesign} alt='WebDesign' />
                <div className='skillBarText'>
                    <h2>App Development</h2>
                    <p>Building Android/iOS apps</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills