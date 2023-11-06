import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary text-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698732835276_Voltixlogo.png?AWSAccessKeyId=K49UPV101Q9KIYF13OOR&Expires=1699025238&Signature=eYMU7B55QthJFqawFFXZpJm0x78%3D"
            alt="VoltixLogo"
            width="100"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Feeds">
                Feeds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/FAQ">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
