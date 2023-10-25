import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar back">
            <ul className="nav">
                <li className="nav-item">
                    <a className='nav-link' href='/' id='text'>Home</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' href='/Services' id='text'>Services</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' href='/Projects' id='text'>Projects</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' href='/About' id='text'>About</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link' href='/Contact' id='text'>Contact</a>
                </li>
                <li className="nav">
                    <a className='nav-link' href='/' id='text'>Footer</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
