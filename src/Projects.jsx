import React from 'react'

const Projects = () => {
  return (
    <div id='proj' className='proj-background'>
        <div className='proj'>
            <h1>Some Projects I've Built...</h1>
            <div className='proj-display'>
                <div className='projects'>
                    <h2>Netflix Clone</h2>
                    <img src={require('./netlix.png')} />
                </div>
                <div className='projects'>
                    <h2>Weather To-Do List</h2>
                    <img src={require('./weathertodo.png')} />
                </div>
                <div className='projects'>
                    <h2>Google Dino-Game</h2>
                    <img src={require('./dino.png')} />
                </div>
                <div className='projects'>
                    <h2>To-Do List Version 1.0</h2>
                    <img src={require('./todopic.png')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects