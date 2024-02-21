import React from 'react'
import './works.css';
import work1 from '../../assets/game.png'
import work2 from '../../assets/list.png'
import work3 from '../../assets/weather.png'
import link from '../../assets/link.png'

const Works = () => {

  const func = (url) => {
    if (url.startsWith('http') || url.startsWith('https')) {
      window.open(url);
    } else {
      let loc = 'https://' + url;
      window.open(loc)
    }
  }

  return (
    <section className='works' id='works'>
        <div className='worksTitle'>My Portfolio</div>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence</span>
        <div className='work-list'>
          <div className='work'>
            <img src={work1} alt='' className='worksImg' />
            <div className='layer'>
              <h3>Tic Tac Toe Game</h3>
              <p>Here, players(the Computer and the User) take turns placing a mark in one of the cells of the grid. 
                The goal of the game is for players to position their marks so that they make a continuous line of three cells vertically, horizontally, or diagonally.</p>
              <a href='#' onClick={() => func("https://github.com/annieminj/tictactoe-game")}><img src={link} alt='' className='work-link'/></a>
            </div>
          </div>
          <div className='work'>
            <img src={work2} alt='' className='worksImg' />
            <div className='layer'>
              <h3>To Do List</h3>
              <p>To help you stay more organised and manage your tasks more efficiently, here is an app which will create a clear outline of the tasks you’ve got to do and those you’ve completed.
              </p>
              <a href='#'  onClick={() => func("https://github.com/annieminj/todolist")}><img src={link} alt='' className='work-link'/></a>
            </div>
          </div>
          <div className='work'>
            <img src={work3} alt='' className='worksImg' />
            <div className='layer'>
              <h3>Weather detector</h3>
              <p>
                A tool which would help us to predict the current condition of atmosphere for a given location. 
              </p>
              <a href='#'  onClick={() => func("https://github.com/annieminj/weather-app")}><img src={link} alt='' className='work-link'/></a>
            </div>
          </div>
        </div>
        {/* <button className='workBtn'>See More</button> */}
    </section>
  )
}

export default Works