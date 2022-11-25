import React from 'react'
import Contact from './Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Navbar(){
    return (
    <BrowserRouter>
            <nav className='navBar'>
                <a href='/'><img className = 'icon' src='websiteIcon.png'></img></a>
                <ul>
                    <li><a className='nav-items' href='#proj'>Projects</a></li>
                    <li><a className='nav-items' href="#Contact">Contact Me</a></li>
                    <a className='resume'>Download Resume</a>
                </ul>
            </nav>
    </BrowserRouter>
    )
}
