import React from 'react';
import './about-me.css';

const AboutMe = () => {
  return (
    <section className='about' id='about'>
        <span className='aboutTitle'>About Me</span>
        <span className='aboutDescription'>I'm a seasoned professional with over 3 years of experience in the industry. 
                My passion lies in implementing captivating designs through front-end development. 
                I take pride in producing visually appealing, smooth, interactive and user-friendly applications.
                I have a proven track record of delivering the best results within a given time.
                When starting a new project, I thoroughly research and analyse the client's requirements and also
                I excel at building and maintaining good client relationships.
        </span>
        <span className='aboutEdu'>
            <h2>Education</h2>
            <div className='aboutEduList'>
                <span className='aboutYear'>2020</span><br />
                <span className='aboutDegree'>Mtech in Computer Science and Technology from IIEST, Shibpur</span>
            </div>
            <div className='aboutEduList'>
                <span className='aboutYear'>2017</span><br />
                <span className='aboutDegree'>Btech in Computer Science and Engineering from NIT, Durgapur</span>
            </div>
            <div className='aboutEduList'>
                <span className='aboutYear'>2013</span><br />
                <span className='aboutDegree'>HSC from Delhi Public School, Siliguri    </span>
            </div>
            <div className='aboutEduList'>
                <span className='aboutYear'>2011</span><br />
                <span className='aboutDegree'>SSC from St. Joseph's School, Siliguri</span>
            </div>
        </span>
    </section>
  )
}

export default AboutMe