import React from 'react'
import './skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import angular from '../../assets/agular.png'
import ionic from '../../assets/ionic.png'
import Progress_bar from '../../utilities/progress-bar'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <span className='skillsTitle'>My Skills</span>
        <span className='skillsDescription'>
          <div>
            <div className='skillList'>
              <span className='skillLogo'><img className='skillImg' src={html} alt='image' /></span>
              <span className='skillHead'>HTML</span><br/>
            </div>
            <div className='skillList'>
              <span className='skillLogo'><img className='skillImg' src={css} alt='image' /></span>
              <span className='skillHead'>CSS</span><br/>
            </div>
            <div className='skillList'>
              <span className='skillLogo'><img className='skillImg' src={javascript} alt='image' /></span>
              <span className='skillHead'>Javascript</span><br/>
            </div>
            <div className='skillList'>
              <span className='skillLogo'><img className='skillImg' src={react} alt='image' /></span>
              <span className='skillHead'>React</span><br/>
            
            </div>
            <div className='skillList'>
              <span className='skillLogo'><img className='skillImg' src={angular} alt='image' /></span>
              <span className='skillHead'>Angular</span><br/>
            </div>
            <div className='skillList'>
              <span className='skillLogo'><img className='skillImg' src={ionic} alt='image' /></span>
              <span className='skillHead'>Ionic</span><br/>
            </div>
          </div>
          <div className='skillsBox'>
            <span>
              <Progress_bar progress="85"/>
            </span>
            <span>
              <Progress_bar progress="90"/>
            </span>
            <span>
              <Progress_bar progress="80"/>
            </span>
            <span>
              <Progress_bar progress="50"/>
            </span>
            <span>
              <Progress_bar progress="80"/>
            </span>
            <span>
                <Progress_bar progress="70"/>
              </span>
          </div>

          
          
          
          
        </span>
    </section>
  )
}

export default Skills