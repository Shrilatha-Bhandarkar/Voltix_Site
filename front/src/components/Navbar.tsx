import "./styles/navbar.css";

const Navbar = () => {
  return (
    // <div>
    //   <nav className="navbar back fixed-top navbar-expand-lg">
    //   <a href='/'><img src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698732835276_Voltixlogo.png?AWSAccessKeyId=CRIVX3CRA0D57MO4GSQ0&Expires=1698891001&Signature=tx84rnOCOeZUJvD0hdntYdG3oI8%3D" alt="VoltixLogo" className="logo" /></a>

    //     <ul className="nav">
    //       <li className="nav-item">
    //         <a className="nav-link" href="/" id="text">
    //           Home
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/Services" id="text">
    //           Services
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/Projects" id="text">
    //           Projects
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/About" id="text">
    //           About
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/Contact" id="text">
    //           Contact Us
    //         </a>
    //       </li>
    //     </ul>
    //     <a className='nav-link' href='/FAQ'><button className="nav-btn">FAQ</button></a>
    //   </nav>
    // </div>
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary text-center">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://s3.ap-southeast-1.wasabisys.com/voltixsite/1698732835276_Voltixlogo.png?AWSAccessKeyId=A8DQ3D16NBFXG1S5TLLF&Expires=1699286573&Signature=602%2FPkEdYq7yYK9YoYd%2F1ncWcaQ%3D"
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
