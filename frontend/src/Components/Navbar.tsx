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
                                <a className='nav-link' href='/Contact' id='text'>Show Recipes</a>
                    </div>
                        <div className="navbar-right" >
                            <a href='Login'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Login</button></a>
                        </div>
                        <div className="nav navbar-nav navbar-right">
                            <a href='SignUp'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Sign-up</button></a>
                        </div>
                </nav>
            </div>
            {/* <div className="input-group">
                <input type="search" className="form-control rounded me-3 bs" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn rounded search">Search</button>
            </div> */}
        </div>
    );
}

export default Navbar;
