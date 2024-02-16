import React from 'react'
import './intro.css'
import person from '../../assets/16.jpeg'
import {Link} from 'react-scroll'
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section className='introHead' id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Annie <br/></span>
              <Typewriter
                options={{
                  strings: ['Software Engineer'],
                  autoStart: true,
                  loop: true,
                }}
                  // onInit={(typewriter) => {
                  //     typewriter
                  //         .typeString('Software Engineer')
                  //         .start();
                  // }}
              />
            </span>
            <p className='introPara'>I am a skilled Front-end Developer with experience in designing, developing <br/> and maintaining user friendly front-end web and mobile applications </p>
            <Link><button className='btn'>Hire Me</button></Link>
        </div>
        <img src={person} alt='image' className='bg'/>
    </section>
  )
}

export default Intro
