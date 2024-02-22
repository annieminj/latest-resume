import React, { useRef, useState } from 'react'
import './contact.css';
import img1 from '../../assets/3.jpeg'
import img2 from '../../assets/12.jpeg'
import youtube from '../../assets/14.jpeg';
import twitter from '../../assets/10.jpeg'
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/5.jpeg'
import facebook from '../../assets/facebook.png'
import emailjs from '@emailjs/browser';
import PropagateLoader from "react-spinners/PropagateLoader";

const Contact = () => {
    const form = useRef();  
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#ffffff");
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1evuuii', 'template_edan9lf', form.current, 'dTGnCDSkSD38UH3FJ')
          .then((result) => {
              e.target.reset();
              console.log(result.text);
              setLoading(false);
              alert('Email sent !!')
          }, (error) => {
              console.log(error.text);
              setLoading(false);
          });
    };

    const func = (url) => {
        if (url.startsWith('http') || url.startsWith('https')) {
          window.open(url);
        } else {
          let loc = 'https://' + url;
          window.open(loc)
        }
    }
    
  return (
    <section className='contactPage'>
        {/* <div className='clients' id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies. 
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img className='clientImg' src={img1} alt='Clients'/>
                <img className='clientImg' src={img2} alt='Clients'/>
            </div>
        </div> */}
        <div className='contact' id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='clientDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' name='from_name'/>
                <input className='email' type='email' placeholder='Your Email' name='from_email'/>
                <textarea name='message' rows='5' className='msg' placeholder='Your Message'></textarea>
                <button className='submitBtn' type='submit' value='Send' onClick={() => setLoading(true)} style={{display: loading ? 'none' : 'flex'}}>Submit</button>
                <PropagateLoader color={color} className='loader' loading={loading} style={{display: loading ? 'flex' : 'none'}}/>
                <div className='links'>
                    <a href='#'  onClick={() => func("https://github.com/annieminj/weather-app")}><img src={twitter} alt='icon' className='link'/></a>
                    <a href='#'  onClick={() => func("https://www.linkedin.com/in/annie-minj-9b5317104/")}><img src={linkedin} alt='icon' className='link'/></a>
                    <a href='#'  onClick={() => func("https://github.com/annieminj/weather-app")}><img src={insta} alt='icon' className='link'/></a>
                    <a href='#'  onClick={() => func("https://github.com/annieminj/weather-app")}><img src={facebook} alt='icon' className='link'/></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact