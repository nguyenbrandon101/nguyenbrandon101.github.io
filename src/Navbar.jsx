import React from 'react'

export default function Navbar(){
    return (
            <nav className='navBar'>
                <a href='/'><img className = 'icon' src='websiteIcon.png'></img></a>
                <ul>
                    <li><a className='nav-items' href='#proj'>Projects</a></li>
                    <li><a className='nav-items' href="#Contact">Contact Me</a></li>
                    <a href={require("./Nguyen_Brandon_Resume.pdf")} target="_blank" className = "resume">Download Resume</a>
                </ul>
            </nav>
    )
}
