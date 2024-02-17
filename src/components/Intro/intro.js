import React from 'react'
import './intro.css'
import person from '../../assets/18.png'
import {Link} from 'react-scroll'
import Typewriter from "typewriter-effect";
import resume from "../../assets/Annie_Minj.pdf"

const Intro = () => {

  const downloadCV = () => {
    console.log("downloadCV")
    const pdfUrl = {resume}
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "document.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

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
            <p className='introPara'>I am a skilled Front-end Developer with experience in designing, developing <br/> and maintaining user friendly web and mobile applications </p>
            <button className='btn' onClick={() => downloadCV()}>Download CV</button>
        </div>
        <img src={person} alt='image' className='bg'/>
    </section>
  )
}

export default Intro
