import React from 'react'
import './works.css';
import work1 from '../../assets/4.jpeg'
import work2 from '../../assets/6.jpeg'
import work3 from '../../assets/7.jpeg'
import work4 from '../../assets/8.jpeg'
import work5 from '../../assets/9.jpeg'
import work6 from '../../assets/15.jpeg'

const Works = () => {
  return (
    <section className='works' id='works'>
        <div className='worksTitle'>My Portfolio</div>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence</span>
        <div className='worksImgs'>
            <img src={work1} alt='' className='worksImg' />
            <img src={work2} alt='' className='worksImg' />
            <img src={work3} alt='' className='worksImg' />
            <img src={work4} alt='' className='worksImg' />
            <img src={work5} alt='' className='worksImg' />
            <img src={work6} alt='' className='worksImg' />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works