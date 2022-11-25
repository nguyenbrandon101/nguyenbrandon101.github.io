import React from 'react'

const Projects = () => {
  return (
    <div id='proj' className='proj-background'>
        <h1>Some Projects I've Built...</h1>
        <div className='container'>
            <div className='proj'>
                <div className='proj-display'>
                    <div className='projects'>
                        <h2>Netflix Clone</h2>
                        <img src={require('./netlix.png')} />
                        <div className='proj-descrp'>
                            <h3> Tech Stack:</h3>
                            <h4>React, JS, CSS,HTML ,Firebase</h4>
                            <p> A Netflix clone that incoporates Firebase and Firestore to authorize secure logins to users while also keeping track of user's saved movies.</p>
                            <a href='https://netflixcloner.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/netflixcloner'><img src={require('./github.png')} className="git"/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h2>Weather To-Do List</h2>
                        <img src={require('./weathertodo.png')} />
                        <div className='proj-descrp'>
                            <h3> Tech Stack:</h3>
                            <h4>React, JS, CSS,HTML</h4>
                            <p> A todo list app that allows the user to organize their task for the day. Incoporated a weather API to also display the weather of any city.</p>
                            <a href='https://weathertasktracker.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/todoapp-version2.0'><img src={require('./github.png')} className="git"/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h2>Google Dino-Game</h2>
                        <img src={require('./dino.png')} />
                        <div className='proj-descrp'>
                            <h3> Tech Stack:</h3>
                            <h4>JS, CSS,HTML</h4>
                            <p> A Google Chrome clone of the infamous Dino Game. Users can control the dino to jump over cactus. Users scores are kept and memorized.</p>
                            <a href='https://chrome-dinoclone.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/dino-game-master'><img src={require('./github.png')} className="git"/></a>
                        </div>
                    </div>
                    <div className='projects'>
                        <h2>To-Do List Version 1.0</h2>
                        <img src={require('./todopic.png')} />
                        <div className='proj-descrp'>
                            <h3> Tech Stack:</h3>
                            <h4>JS, CSS,HTML</h4>
                            <p> A todo list app that allows the user to organize their task for the day. Users can categorize their task into either business or personal.</p>
                            <a href='https://github.com/nguyenbrandon101/Todo-List-Version1.0'><img src={require('./github.png')} className="git"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects