import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){

    return (
    <div>
        <nav className='navBar'>
            <a ><img className = 'icon' src='websiteIcon.png'></img></a>
            <ul>
                <li><a className='nav-items' href='#proj'>Projects</a></li>
                <li><a className='nav-items'>Contact Me</a></li>
                <a className='resume'>Download Resume</a>
            </ul>
        </nav>
    </div>
    )
}
