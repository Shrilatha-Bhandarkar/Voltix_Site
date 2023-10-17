import React from "react";
import './Home.css'
const Navbar = () => {
    return (
        <div className='h_full'>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg back">
                    <div className='navbar-brand head'id="Recipe" >
                        <img src={require('../images/Voltixlogo.png')} alt='Logo' width={60} height={70} className='img-responsive me-3'></img>
                        <a className='nav-link' href='/' id='text'>Home</a>
                                <a className='nav-link' href='/Services' id='text'>Services</a>
                                <a className='nav-link' href='/Projects' id='text'>Projects </a>
                                <a className='nav-link' href='/About'  id='text'>About</a>
                                <a className='nav-link' href='/Contact' id='text'>Contact</a>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;