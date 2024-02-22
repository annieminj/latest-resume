import React, { useState } from 'react'
import './skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import angular from '../../assets/agular.png'
import ionic from '../../assets/ionic.png'
import Progress_bar from '../../utilities/progress-bar'
import {Link} from 'react-scroll'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const [showProfessional, setShowrofessional] = useState(false);
  return (
    <section className='skills' id='skills'>
        <span className='skillsTitle'>My Skills</span>
        <span className='skillsSection'>
          <span className='skillsSubSection'  onClick={() => setShowrofessional(false)} style={{borderBottom : !showProfessional ? '3px solid greenyellow' : 'none', color : !showProfessional ? 'greenyellow' : 'white'}} >Technical Skills</span>
          <span className='skillsSubSection'  onClick={() => setShowrofessional(true)} style={{borderBottom : showProfessional ? '3px solid greenyellow' : 'none', color : showProfessional ? 'greenyellow' : 'white'}}>Professional Skills</span>
        </span>
        <span className='skillsDescription' id='technical' style={{display: !showProfessional ? 'flex' : 'none'}}>
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
        <span id='professional' className='skillsProf' style={{display: showProfessional ? '' : 'none'}}>
          <div className='skillsProfSection'>
            <div style={{ width: 125, height: 125 }}>
              <CircularProgressbar
                value={90}
                text="90%"
                styles={buildStyles({
                  pathColor: 'yellowgreen',
                  textColor: 'white',
                  trailColor: 'white',
                  textSize: "14px",
                  height: "20px"
                })}
              />
            </div>
            <span>Creativity</span>
          </div>
          <div className='skillsProfSection'>
            <div style={{ width: 125, height: 125 }}>
              <CircularProgressbar
                value={85}
                text="85%"
                styles={buildStyles({
                  pathColor: 'yellowgreen',
                  textColor: 'white',
                  trailColor: 'white',
                  textSize: "14px",
                  height: "20px"
                })}
              />
            </div>
            <span>Communication</span>
          </div>
          <div className='skillsProfSection'>
            <div style={{ width: 125, height: 125 }}>
              <CircularProgressbar
                value={95}
                text="95%"
                styles={buildStyles({
                  pathColor: 'yellowgreen',
                  textColor: 'white',
                  trailColor: 'white',
                  textSize: "14px",
                  height: "20px"
                })}
              />
            </div>
            <span>Problem Solving</span>
          </div>
          <div className='skillsProfSection'>
            <div style={{ width: 125, height: 125 }}>
              <CircularProgressbar
                value={90}
                text="90%"
                styles={buildStyles({
                  pathColor: 'yellowgreen',
                  textColor: 'white',
                  trailColor: 'white',
                  textSize: "14px",
                  height: "20px"
                })}
              />
            </div>
            <span>Teamwork</span>
          </div>
        </span>
    </section>
  )
}

export default Skills