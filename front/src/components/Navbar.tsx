import './styles/navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar back">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/" id="text">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Services" id="text">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Projects" id="text">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About" id="text">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact" id="text">
              Contact Us
            </a>
          </li>
        </ul>
        <button className="nav-btn">Let's Talk</button>
      </nav>
    </div>
  );
};

export default Navbar;