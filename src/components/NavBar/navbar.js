import React, { useState } from 'react'
import './navbar.css'
import mobMenu from '../../assets/2.jpeg'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        {/* <img src={logo} alt='logo' className='logo' /> */}
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Services</Link>
            {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link> */}
        </div>
        <button className='desktopMenuBtn' onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
            Contact Me
        </button>

        <img src={mobMenu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Services</Link>
            {/* <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Clients</Link> */}
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar