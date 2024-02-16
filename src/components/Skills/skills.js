import React from 'react';
import './skills.css';
import UIDesign from '../../assets/11.jpeg';
import WebDesign from '../../assets/13.jpeg';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>I am a skilled and passionate web designer with experience of 3.5 years in HTMl, CSS and experince of 3 years in React, Angular and Ionic framework.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img className='skillBarImg' src={UIDesign} alt='UIDesign' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={WebDesign} alt='WebDesign' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={UIDesign} alt='UIDesign' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills