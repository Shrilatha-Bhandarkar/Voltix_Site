const Navbar = () => {
    return (
        <div className='h_full'>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg back">
                    <div className='navbar-brand head'id="Recipe" >
                        <img src={require('../Images/Voltixlogo.png')} alt='Logo' width={60} height={70} className='img-responsive me-3'></img>
                        
                    </div>
                    <div className="container">
                        <ul className="navbar-nav non-head">
                            <li className='nav-item'>
                                <a className='nav-link' href='/' id='text'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Services' to="/Services" id='text'>Services</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Projects' to="/Projects" id='text'>Projects </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/About' to="/About" id='text'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Contact' to="/Home1s" id='text'>Show Recipes</a>
                            </li>
                        </ul>
                        <div className="nav navbar-nav navbar-right">
                            <a href='Login'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Login</button></a>
                        </div>
                        <div className="nav navbar-nav navbar-right">
                            <a href='SignUp'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Sign-up</button></a>
                        </div>
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
